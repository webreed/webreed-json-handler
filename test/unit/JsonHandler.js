// Copyright (c) Rotorz Limited. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root.


import given from "mocha-testdata";
import should from "should";

import {JsonHandler} from "../../lib/JsonHandler";


describe("JsonHandler", function () {

  beforeEach(function () {
    this.jsonHandler = new JsonHandler();
  });


  it("is named 'JsonHandler'", function () {
    JsonHandler.name
      .should.be.eql("JsonHandler");
  });


  describe("#constructor()", function () {

    it("is a function", function () {
      JsonHandler.prototype.constructor
        .should.be.a.Function();
    });

  });


  describe("#decode(encodedData, context)", function () {

    it("is a function", function () {
      this.jsonHandler.decode
        .should.be.a.Function();
    });

    given(
      [ "true", true ],
      [ "false", false ],
      [ '"Hello"', "Hello" ],
      [ "42", 42 ],
      [ "[ 1, 2, 3 ]", [ 1, 2, 3 ] ],
      [ '{ "a": 1, "b": true, "c": "Hi!" }', { a: 1, b: true, c: "Hi!" } ]
    ).
    it("parses and returns data from a JSON encoded string", function (json, expectedResult) {
      this.jsonHandler.decode(json)
        .should.eventually.be.eql(expectedResult);
    })

  });

  describe("#encode(data, context)", function () {

    it("is a function", function () {
      this.jsonHandler.encode
        .should.be.a.Function();
    });

    given(
      [ true, "true" ],
      [ false, "false" ],
      [ "Hello", '"Hello"' ],
      [ 42, "42" ],
      [ [ 1, 2, 3 ], "[ 1, 2, 3 ]" ],
      [ { a: 1, b: true, c: "Hi!" }, '{ "a": 1, "b": true, "c": "Hi!" }' ]
    ).
    it("produces JSON encoded string for the given data", function (data, expectedJson) {
      this.jsonHandler.encode(data)
        .should.eventually.be.eql(expectedJson);
    })

  });

});
