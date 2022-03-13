'use strict';

var utils = require('../utils/writer.js');
var Jobs = require('../service/jobsService');

module.exports.createJob = function createJob (req, res, next) {
  var body = req.swagger.params['body'].value;
  Jobs.createJob(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.jobOptions = function jobOptions (req, res, next) {
  Jobs.jobOptions()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });}


module.exports.deleteJob = function deleteJob (req, res, next) {
  var name = req.swagger.params['name'].value;
  Jobs.deleteJob(name)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listJobs = function listJobs (req, res, next) {
  Jobs.listJobs()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
