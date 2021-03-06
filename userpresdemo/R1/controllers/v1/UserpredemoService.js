'use strict';
  var UserpredemoFD = require('../../sampleData/v1/Userpredemo.json');
  var UserpredemoData = UserpredemoFD;


var Promise = require('bluebird');
var paginationService = require('../../services/pagination.js');
 

exports.getUserpredemo = function(args, res, next) {
/**
 * Gets all customers from the system that the user has access to
 *
 * returns List
 **/
  if (Object.keys(UserpredemoData).length > 0) {
            res.setHeader('Content-Type', 'application/json');
                                      console.log('Start Pagination......');
    paginationService.getPages(args.pageNumber.value, args.pageSize.value, UserpredemoData).then(function(result) {
        res.writeHead(200, {
            "Total": result.total,
            "Per-Page": result.pageSize,
            "Total-Pages": result.totalPages
        });
        res.end(JSON.stringify(result.pagedData));
    }).catch(function(error) {
        res.end(JSON.stringify(error));
    });
                        } else {
      res.end();
  }
}





exports.putUserpredemo = function(args, res, next) {
/**
 * Puts all customers from the system that the user has access to
 *
 **/
  if (Object.keys(UserpredemoData).length > 0) {
            res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify(UserpredemoData[Object.keys(UserpredemoData)[0]] || {}, null, 2));
  } else {
      res.end();
  }
}


exports.postUserpredemo = function(args, res, next) {
/**
 * Posts all customers from the system that the user has access to
 *
 **/
  if (Object.keys(UserpredemoData).length > 0) {
            res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify(UserpredemoData[Object.keys(UserpredemoData)[0]] || {}, null, 2));
  } else {
      res.end();
  }
}


exports.patchUserpredemo = function(args, res, next) {
/**
 * Patchs all customers from the system that the user has access to
 *
 **/
  if (Object.keys(UserpredemoData).length > 0) {
            res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify(UserpredemoData[Object.keys(UserpredemoData)[0]] || {}, null, 2));
  } else {
      res.end();
  }
}



exports.deleteUserpredemo = function(args, res, next) {
/**
* Deletes all customers from the system that the user has access to
*
**/
  if (Object.keys(UserpredemoData).length > 0) {
      res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify(UserpredemoData[Object.keys(UserpredemoData)[0]] || {}, null, 2));
  } else {
      res.end();
  }
}


