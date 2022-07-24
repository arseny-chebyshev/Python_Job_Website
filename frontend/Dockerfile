FROM node:18-alpine3.15
RUN apk add npm
WORKDIR /PYTHON_JOB_WEBSITE
COPY . .
#COPY ../.env ./.env
RUN npm install
RUN npm run build