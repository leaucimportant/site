FROM node:16.17.0-alpine3.16 as build-stage
WORKDIR /app
COPY . .
RUN yarn
ARG NODE_ENV=production
ENV NODE_ENV ${NODE_ENV}
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD true
ENV SCULLY_PUPPETEER_EXECUTABLE_PATH /usr/bin/chromium-browser
RUN apk add --no-cache nss chromium freetype harfbuzz ca-certificates ttf-freefont
RUN yarn run build
RUN yarn run scully

# étape de production
FROM nginx:1.23.1-alpine as production-stage
COPY ./docker/nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
COPY --from=build-stage /app/public /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
