'use strict';

const printer  = require("./printer").printer;
var utils = require('../utils/writer.js');
/**
 * Create a job
 *
 * body JobInfo 
 * returns jobInfo
 **/
 exports.createJob = (body) =>{
  return new Promise(function(resolve, reject) {
    if (printer.queue.some(item=> item.name === body.name)) {
      resolve(new utils.respondWithCode(400, "name already exists" ));
    }else  {
      body.status = "queued" ;
      printer.queue.push(body);
      resolve(body);
    }
   
  });
}

exports.jobOptions = () =>{
  return new Promise(function(resolve, reject) {
    resolve("");
  });
}

/**
 * Delete a job
 *
 * name String Name of the job to delete.
 * returns jobInfo
 **/
 exports.deleteJob = (name) =>{
  return new Promise(function(resolve, reject) {
    printer.queue = printer.queue.filter(job=> job.name != name);
    resolve();
  });
}


/**
 * List available jobs
 *
 * returns List
 **/
 exports.listJobs = () =>{
  return new Promise(function(resolve, reject) {
    resolve(printer.queue);
  });
}

