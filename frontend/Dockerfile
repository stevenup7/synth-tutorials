# frontend/Dockerfile
FROM node:18-alpine as build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . /app

RUN npm run build


CMD ["npm", "run", "dev", "--", "--host"]
# CMD ["nginx", "-g", "daemon off;"]
