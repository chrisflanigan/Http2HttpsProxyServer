Http2HttpsProxyServer
=====================

A Node-based http => https proxy server

To run:

1) copy config/default.yaml to local.yaml and change your hosts, paths, and ports etc

2) Install node

3) Install forever npm install -g forever

4) in the project root directory, type:

npm update
export NODE_ENV=local && ./bin/start.sh
