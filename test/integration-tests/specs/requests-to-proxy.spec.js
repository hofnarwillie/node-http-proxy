'use strict';

const assert = require('assert');
const request = require('supertest')('http://http-proxy');

describe('Firing HTTP requests to the proxy', () => {
    it('should return the target response', () => {
        return request.get('')
            .send()
            .expect(200)
            .then(response => {
                assert(response.body, 'TARGET_SERVER_RESPONSE')
            });
    });
    it('should return cookie headers', () => {
        return request.get('')
            .send()
            .then(response => {
                assert(response.header['set-cookie'][0], 'test=foo')
            });
    });
});