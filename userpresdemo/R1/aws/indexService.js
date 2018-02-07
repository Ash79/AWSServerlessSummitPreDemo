'use strict';
      //var UserpredemoFD = require('./Userpredemo.json')
  var UserpredemoFD = require('./v1/Userpredemo.json');
    var UserpredemoData = UserpredemoFD;
          exports.getUserpredemo = function(event, cb) {
    const response = {
      statusCode: 200,
      headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": true
      },
      body: JSON.stringify( UserpredemoData),
      isBase64Encoded: false
    };
    cb(null, response);
  }
                      exports.putUserpredemo = function(event, cb) {
      UserpredemoData.push(event.body);
      var response = {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": true
        },
        body: "Item inserted successfully",
        isBase64Encoded: false
      };
      cb(null, response);
  }
              exports.postUserpredemo = function(event, cb) {
      UserpredemoData.push(event.body);
      var response = {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": true
        },
        body: "Item inserted successfully",
        isBase64Encoded: false
      };
      cb(null, response);
  }
              exports.patchUserpredemo = function(event, cb) {
      UserpredemoData.push(event.body);
      var response = {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": true
        },
        body: "Item patched successfully",
        isBase64Encoded: false
      };
      cb(null, response);
  }
            exports.deleteUserpredemo = function(event, cb) {
      var response = {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": true
        },
        body: "",
        isBase64Encoded: false
      };
      var index = UserpredemoData.indexOf(event.body);
      if (index > -1) {
          UserpredemoData.splice(index, 1);
          response["body"] = "Item deleted successfully";
      }else{
        response["body"] = "Item does not exist";
      }
      cb(null, response);
  }
            