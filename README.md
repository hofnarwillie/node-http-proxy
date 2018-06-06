node-http-proxy
===

![](https://travis-ci.org/hofnarwillie/node-http-proxy.svg?branch=master)

A docker image that contains a proxy server that simply forwards requests to whatever is set in the environment variable `TARGET_URL`.

Uses https://www.npmjs.com/package/http-proxy internally.

Example
---

```
docker run -it -p 30000:80 -e TARGET_URL=http://example.com/ hofnarwillie/node-http-proxy
```

Scripts
---

* `npm test` - integration tests (requires docker-compose)

Notes/TODO
---

* Ignores untrusted SSL connections with the downstream service.
