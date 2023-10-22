FROM node:16.9.0-alpine
WORKDIR /app/src
COPY package.json yarn.lock /app/src/
RUN yarn
COPY . .
ENTRYPOINT [ "yarn" ]
CMD [ "dev" ]