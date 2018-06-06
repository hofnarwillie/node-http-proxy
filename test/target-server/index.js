var https = require('https');
const fs = require('fs');
const path = require("path");

const options = {
  key: fs.readFileSync(path.resolve(__dirname, 'key.pem')),
  cert: fs.readFileSync(path.resolve(__dirname, 'cert.pem'))
};

https.createServer(options, function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('TARGET_SERVER_RESPONSE');
    res.end();
}).listen(443);

console.log('Listening on port 443...');
