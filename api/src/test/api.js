'use strict';

var assert = require('chai').assert,
    request = require('supertest');

var url = "http://localhost:8080";
request = request(url);

describe('API', function() {  
   describe('GET beers', function () {
      it('should return beer list', function (done) {
         request
            .get('/api/beers/')
            .end(function(err, res){
               assert(res)
               assert(res.text)
               var data = JSON.parse(res.text)
               assert(data)
               assert.isArray(data)
               console.log(data)
               if (err) throw err;
               done();
         });
      });
   });
});
