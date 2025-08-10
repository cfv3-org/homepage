FROM node:20-alpine AS build
WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci --omit=dev=false

COPY tsconfig.json vite.config.ts postcss.config.js tailwind.config.js ./
COPY index.html ./
COPY src ./src
COPY assets ./assets

RUN npm run build

# ---------- runtime ----------
FROM nginx:1.27-alpine

COPY --from=build /app/dist /usr/share/nginx/html
COPY assets/files /usr/share/nginx/html/assets/files
COPY assets/images /usr/share/nginx/html/assets/images

EXPOSE 80
CMD ["nginx","-g","daemon off;"]
