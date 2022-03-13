'use strict';

var utils = require('../utils/writer.js');
var Job = require('../service/jobService');

module.exports.cancelJob = function cancelJob (req, res, next) {
  var name = req.swagger.params['name'].value;
  Job.cancelJob(name)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.moveJob = function moveJob (req, res, next) {
  var name = req.swagger.params['name'].value;
  var up = req.swagger.params['up'].value;
  Job.moveJob(name,up)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
