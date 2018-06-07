var httpProxy = require('http-proxy');
var http = require('http');
var process = require('process');

var proxy = httpProxy.createProxyServer();

proxy.on('proxyRes', function (proxyRes, req, res) {
    console.log('RAW Response from the target', JSON.stringify(proxyRes.headers, true, 2));
});

var server = http.createServer(function(req, res) {
    console.log('New request received:', req.headers.host + req.url);
    proxy.web(req, res, {
        target: process.env.TARGET_URL,
        secure: false,
        changeOrigin: true,
        cookieDomainRewrite: req.headers.host
    });
});

server.listen(80);
