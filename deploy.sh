#!/bin/bash
docker build -t hofnarwillie/node-http-proxy .
echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_USERNAME" --password-stdin
docker push hofnarwillie/node-http-proxy
