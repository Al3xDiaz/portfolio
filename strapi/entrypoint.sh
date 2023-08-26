#! /bin/sh
yarn config set network-timeout 600000 -g && yarn install
yarn build
exec "$@"
