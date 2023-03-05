FROM node:16.9.0-alpine
WORKDIR /app/src
# COPY package.json .
# RUN yarn --dev
COPY . .
ENTRYPOINT [ "yarn" ]
CMD [ "dev" ]