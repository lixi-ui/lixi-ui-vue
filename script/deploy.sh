#!/bin/sh

git pull

npm run build

rm -r ./server/public/qms/*

cp -r ./dist/* ./server/public/qms/