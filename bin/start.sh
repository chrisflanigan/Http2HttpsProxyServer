#!/bin/bash

if [ "" == "$NODE_ENV" ]; then
    echo NODE_ENV is not set.
    exit 1
fi

echo Starting Proxy, using NODE_ENV for environment: $NODE_ENV

forever -s -l log/app.log app.js &
