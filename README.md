# Cfv3 homepage (personal page)

A single-page personal website: static HTML (Nginx), a "Download CV" button, and a brief introduction.  
Built and deployed to Kubernetes via **werf**, with the container image published to **GHCR**.

## Components

- **Nginx** as the web server (serving static content)

## Repository Structure

```
.
├─ src/
│  ├─ index.html
│  └─ files/
│     └─ cv.pdf                       # Latest resume
├─ images/
└─ README.md
```

## Updating the CV

Replace `src/files/cv.pdf` with the updated résumé, then commit → push to `main` → GitHub Actions will rebuild and redeploy.

## Roadmap

1. ✅ Static page
2. ✅ Containerization
3. ⏳ Deployment via werf
4. ⏳ Redesign  
