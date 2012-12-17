var fs = require('fs'),
    https = require('https'),
    httpProxy = require('http-proxy'),
    proxyServerConfig = require('config').Http2HttpsProxyServer;

var options = {
  https: {
    key: fs.readFileSync(proxyServerConfig.https_server.key, 'utf8'),
    cert: fs.readFileSync(proxyServerConfig.https_server.crt, 'utf8')
  }
};

//
// Create a standalone HTTPS proxy server
//
httpProxy.createServer(proxyServerConfig.http_server.port, proxyServerConfig.http_server.url, options).listen(proxyServerConfig.https_server.port);

console.log('HttpToHttpsProxyServer started...');
console.log('HttpToHttpsProxyServer listening on port: ' + proxyServerConfig.https_server.port);