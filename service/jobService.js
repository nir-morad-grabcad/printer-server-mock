'use strict';

const printer  = require("./printer").printer;

/**
 * cancel a job
 *
 * name String Name of the job.
 * no response value expected for this operation
 **/
 exports.cancelJob= (name) => {
  return new Promise(function(resolve, reject) {
    if (printer.queue.length > 0 && printer.queue[0].name === name) {
      printer.queue[0].status = "stopped";
    }
    resolve();
  });
}


/**
 * Move a job
 *
 * name String Name of the job.
 * up Boolean Should move up or down. (optional)
 * no response value expected for this operation
 **/
 exports.moveJob = (name,up) => {
  return new Promise(function(resolve, reject) {
   if (printer.queue.length > 1) {
    const result = printer.queue.findIndex(job=> job.name === name);
      if (result !== -1 &&  result !== 0) {
        const moveTo  = up ? result -1:  result + 1;
        if (moveTo > 0 && moveTo < printer.queue.length) {
          const saveJob = printer.queue[moveTo];
          printer.queue[moveTo] =  printer.queue[result];
          printer.queue[result] = saveJob;
        }
      }
  }
    resolve(printer.queue);
  });
}

