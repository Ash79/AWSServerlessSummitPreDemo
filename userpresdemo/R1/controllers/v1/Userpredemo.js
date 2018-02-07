'use strict';
var url = require('url');
var Userpredemo = require('./UserpredemoService');

module.exports.getUserpredemo = function getUserpredemo (req, res, next) {
    Userpredemo.getUserpredemo (req.swagger.params, res, next);
};

module.exports.putUserpredemo = function putUserpredemo (req, res, next) {
    Userpredemo.putUserpredemo (req.swagger.params, res, next);
};

module.exports.postUserpredemo = function postUserpredemo (req, res, next) {
    Userpredemo.postUserpredemo (req.swagger.params, res, next);
};

module.exports.patchUserpredemo = function patchUserpredemo (req, res, next) {
    Userpredemo.patchUserpredemo (req.swagger.params, res, next);
};

module.exports.deleteUserpredemo = function deleteUserpredemo (req, res, next) {
    Userpredemo.deleteUserpredemo (req.swagger.params, res, next);
};

