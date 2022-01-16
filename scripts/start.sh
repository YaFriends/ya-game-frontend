#!/bin/sh

if [ "$NODE_ENV" = "production" ] ; then
  yarn install --frozen-lockfile
  yarn build && npx msw init dist/ --save
  node server.js
else
  yarn install
  yarn start
fi
