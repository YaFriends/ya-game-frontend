#!/bin/sh

if [ "$NODE_ENV" = "production" ] ; then
  yarn build && npx msw init dist/ && node server.js
else
  yarn start
fi
