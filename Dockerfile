# ---- build ----
FROM node:18-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm ci --omit=dev

COPY . .

# Smaller build: no source maps (no UI/behavior change)
ENV GENERATE_SOURCEMAP=false
ENV NODE_ENV=production
ENV NODE_OPTIONS=--max-old-space-size=700

RUN npm run build \
 && find /app/build -type f \( -name "*.js" -o -name "*.css" -o -name "*.html" -o -name "*.svg" -o -name "*.json" -o -name "*.txt" \) \
      -exec gzip -9 -k {} \;

# ---- runtime (tiny) ----
FROM nginx:1.27-alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 7777

CMD ["nginx", "-g", "daemon off;"]
