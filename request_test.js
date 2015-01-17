var http = require('http')
var assert = require('assert')
var fs = require('fs')
var request = require('./')
var pkg = require('./package')

var port = 10241

http.createServer(function(req, res) {
    req.pipe(res)
}).listen(10241, function(err) {
    if (err) throw err
    var obj = {foo: 'bar'}
    request('http://localhost:' + port, {body: obj}, function(err, res, body) {
        assert.deepEqual(JSON.parse(body), obj)
        request('localhost:' + port, {
              body: fs.createReadStream('package.json')
            , method: 'POST'
        }, function(err, res, body) {
            assert.deepEqual(pkg, JSON.parse(body))
            console.log('test pass!')
            process.exit(0)
        })
    })
})
