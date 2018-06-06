var httpProxy = require('http-proxy');
var http = require('http');
var process = require('process');

var proxy = httpProxy.createProxyServer();
var server = http.createServer(function(req, res) {
    proxy.web(req, res, {
        target: process.env.TARGET_URL,
        secure: false,
        changeOrigin: true
    });
});

server.listen(80);
