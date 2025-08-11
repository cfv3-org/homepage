# Cfv3 Homepage (Personal Page)

[![Build container and deploy](https://github.com/cfv3-org/homepage/actions/workflows/deploy-to-cloudflare.yaml/badge.svg)](https://github.com/cfv3-org/homepage/actions/workflows/deploy-to-cloudflare.yaml)

A single-page personal website built with **React + Vite + TailwindCSS** and served as static HTML via **Nginx**.  
Includes a “Download CV” button, a portfolio/skills section, and personal introduction.  
Built and deployed to Kubernetes via **werf**, with the container image published to **GHCR**.

## Tech Stack

- **React + Vite + TailwindCSS** — modern, fast, and minimal frontend build
- **Multi-stage Docker build** — Node.js for build → Nginx for serving static files
- **Nginx** — lightweight web server with SPA fallback
- **Helm chart** — Deployment, Service, Ingress, ServiceAccount, etc.
- **werf** — build, publish, and deployment automation
- **GitHub Actions** — CI/CD pipeline
- **Cloudflare** — optional public access with CDN and TLS

## Repository Structure

```
.
├─ .deployment/
│  ├─ Dockerfile           # Multi-stage build (Node → Nginx)
│  └─ nginx.conf           # SPA-friendly Nginx config
├─ .github/workflows/      # CI/CD (werf build + converge)
├─ .helm/                  # Helm chart (Chart.yaml, templates/, values.yaml)
├─ app/src/
│  ├─ assets/
│  │  └─ images/photo.jpeg
│  ├─ src/                 # App source code (Vite project)
│  ├─ index.html
│  ├─ package.json
│  ├─ tailwind.config.js
│  ├─ vite.config.ts
│  └─ ...
├─ werf.yaml               # werf config (build & deploy)
└─ README.md
```

## Requirements

- Docker
- Node.js 20+ (for local build)
- kubectl with access to the Kubernetes cluster
- Helm
- werf (https://werf.io/)
- Write access to GHCR (`ghcr.io/<org>/<repo>`)
- (Optional) Ingress controller in the cluster

## Local Development

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Local Build & Test via Docker

```bash
werf build
docker run --rm -p 8080:80 homepage:local
```
Then open http://localhost:8080

## Deployment via werf

```bash
export WERF_REPO=ghcr.io/cfv3-org/homepage
export NAMESPACE=homepage-production

werf cr login ghcr.io --username <GITHUB_USERNAME> --password <GITHUB_TOKEN>
werf build
werf converge --env production
```

Useful commands:
```bash
werf render --env production
werf dismiss --env production
```

## CI/CD (GitHub Actions)

Push to `main` → build with `werf` → deploy to Kubernetes.

```yaml
name: Build container and deploy
on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: [ self-hosted ]
    permissions:
      contents: read
      packages: write
    env:
      WERF_REPO: ghcr.io/cfv3-org/homepage
      IMAGE_TAG: ${{ github.sha }}
      NAMESPACE: homepage-production
    steps:
      - uses: actions/checkout@v4
      - name: Login to GHCR
        run: |
          werf cr login ghcr.io --username ${{ github.actor }} --password ${{ secrets.GITHUB_TOKEN }}
      - name: Build & publish image
        run: werf build
      - name: Deploy
        run: werf converge --env production
```

> ⚠️ Runner must have Kubernetes cluster access (`kubeconfig`) and werf installed.

## Domain & Ingress

Configured in `.helm/values.yaml`:
- `ingress.enabled`: `true`
- `ingress.hosts[0].host`: `cv.example.com`
- `ingress.tls`: TLS certificate config (optional)

Two ingress templates available:
- `ingress.internal.yaml` — internal access
- `ingress.cloudflare.yaml` — public access via Cloudflare

## Updating the CV

Replace `app/assets/files/cv.pdf` → commit → push to `main` → auto-deploy.

## Roadmap

1. ✅ Static page
2. ✅ Containerization
3. ✅ Deployment via werf
4. ✅ Redesign  
5. ✅ Upload to cloudflare pages  
6. ✅ Update bullets on page
7. ✅ Upload updated CV
8. ⏳ Add images registry cleanup step
