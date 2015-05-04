'use strict';

var assert = require('chai').assert,
    request = require('supertest');

var url = "http://localhost:8080";

describe('routing', function() {  
   describe('GET brews', function () {
      it('should return brew list', function (done) {
         request(url)
            .get('/api/beers/')
            .expect(200)
            .expect('Content-Type', 'application/json; charset=utf-8')
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
