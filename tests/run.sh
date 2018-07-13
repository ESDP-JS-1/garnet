#!/bin/bash

cd ../front/
pm2 start "yarn start:test" --name front

cd ../api
pm2 start "yarn dev:test" --name api


cd ../tests/
yarn start

pm2 kill