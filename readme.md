min-request
===

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]

For people who cannot understand [request](https://github.com/request/request) like me to use request

Support string, json, stream, buffer

===

Install
---

```sh
npm install min-request --save
```

Usage
---

request(url, [options], callback)

callback param is like `request@request`: err, res, body

Simplest

```js
var request = require('min-request')
request('localhost:8080/test', function(err, res, body) {
    console.log(err, body)
})
```

Request with data like json, stream

```js
var request = require('min-request')

// json
request('localhost:8080/upload', {
    method: 'POST',
    body: {foo: 'bar'}
},function(err, res, body) {
    // ...
})

// stream
var fs = require('fs')
request('localhost:8080/upload', {
    method: 'POST',
    body: fs.createReadStream('./foo.bar')
}, function(err, res, body) {
    // ...
})
```

[travis-image]: https://img.shields.io/travis/chunpu/min-request.svg?style=flat
[travis-url]: https://travis-ci.org/chunpu/min-request
[npm-image]: https://img.shields.io/npm/v/min-request.svg?style=flat-square
[npm-url]: https://npmjs.org/package/min-request
