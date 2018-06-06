# node-http-proxy

A docker image that contains a proxy server that simply forwards requests to whatever is set in the environment variable `TARGET_URL`.

Uses https://www.npmjs.com/package/http-proxy internally.

## Scripts

* `npm test` - integration tests (requires docker-compose)

## Notes/TODO

* Ignores untrusted SSL connections with the downstream service.
