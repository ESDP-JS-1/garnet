#!/bin/bash

cd ../front/
yarn
pm2 start "BROWSER=none yarn start:test" --name front

cd ../api
yarn
pm2 start "yarn dev:test" --name api


cd ../tests/
yarn
yarn start:ci

pm2 kill`