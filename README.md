# Cfv3 homepage (personal page)

A single-page personal website: static HTML (Nginx), a "Download CV" button, and a brief introduction.  
Built and deployed to Kubernetes via **werf**, with the container image published to **GHCR**.

## Components

- **Nginx** as the web server (serving static content)
- **Dockerfile** for container image build
- **Helm chart** (Service, Ingress, ServiceAccount, etc.)
- **werf** for build/publish/deployment automation
- **GitHub Actions** for CI/CD
- Dedicated **Ingress for public access through Cloudflare**

## Repository Structure

```
.
├─ .github/workflows/deploy.yaml      # CI/CD (werf build + converge)
├─ .helm/                             # Helm chart (Chart.yaml, templates/, values.yaml)
│  ├─ templates/
│  │  ├─ deployment.yaml
│  │  ├─ service.yaml
│  │  ├─ serviceaccount.yaml
│  │  ├─ ingress.internal.yaml        # Internal network access
│  │  └─ ingress.cloudflare.yaml      # Public access via Cloudflare
│  └─ values.yaml
├─ src/                               # Static website
│  ├─ index.html
│  └─ files/
│     └─ cv.pdf                       # Latest résumé
├─ images/                            # Images/icons
├─ Dockerfile
├─ werf.yaml
└─ README.md
```

## Requirements

- Docker
- kubectl with access to the Kubernetes cluster
- Helm
- werf (see https://werf.io/)
- Write access to GHCR (`ghcr.io/<org>/<repo>`)
- (Optional) Ingress controller in the cluster

## Manual Deployment via werf

Authenticate with GHCR, publish the image, and deploy to the cluster:

```bash
export WERF_LOG_COLOR=on
export WERF_LOG_PRETTY=on
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

Pushing to `main` triggers image build and deployment to the cluster on a self-hosted runner:

```yaml
name: Build container and deploy
on:
  push:
    branches: [ main ]

concurrency:
  group: homepage-${{ github.ref }}
  cancel-in-progress: true

jobs:
  deploy:
    runs-on: [ self-hosted ]
    permissions:
      contents: read
      packages: write
    env:
      WERF_LOG_COLOR: on
      WERF_LOG_PRETTY: on
      WERF_REPO: ghcr.io/cfv3-org/homepage
      IMAGE_TAG: ${{ github.sha }}
      NAMESPACE: homepage-production
    steps:
      - uses: actions/checkout@v4
      - name: Login to GHCR
        run: |
          werf cr login ghcr.io --username ${{ github.actor }} --password ${{ secrets.GITHUB_TOKEN }}
      - name: Build & publish image (werf)
        run: |
          werf build
      - name: Deploy
        run: |
          werf converge --env production
```

> ⚠️ The runner must have Kubernetes cluster access (`kubeconfig`) and werf installed.

## Domain and Ingress Configuration

The hostname and related parameters are set in `.helm/values.yaml`.  
Two Ingress manifests are available:
- `ingress.internal.yaml` — for internal network access
- `ingress.cloudflare.yaml` — for public access via Cloudflare (recommended, if no external IP in a server)

Key parameters:
- `ingress.enabled`: `true/false`
- `ingress.className`: Ingress controller class (e.g., `nginx`)
- `ingress.hosts[0].host`: domain name (e.g., `cv.example.com`)
- `ingress.tls`: TLS configuration if a certificate is used

## Updating the CV

Replace `src/files/cv.pdf` with the updated résumé, then commit → push to `main` → GitHub Actions will rebuild and redeploy.

## Roadmap

1. ✅ Static page
2. ✅ Containerization
3. ✅ Deployment via `werf`
4. ⏳ Redesign  
