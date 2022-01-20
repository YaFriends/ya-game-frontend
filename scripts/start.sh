#!/bin/sh

if [ "$NODE_ENV" = "production" ] ; then
  yarn build && npx msw init dist/ && node index.js
else
  yarn start
fi
