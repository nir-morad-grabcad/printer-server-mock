
const printer =  {
    queue : []
} 

setInterval(()=> {
    if (printer.queue.length > 0 ) {
        if (printer.queue[0].status === "printing") {
            printer.queue[0].duration--;
            if (printer.queue[0].duration <= 0) {
                printer.queue.shift();
            } 
            
        }else {
            if (printer.queue[0].status === "queued") {
                printer.queue[0].status = "printing"; 
            }
        }
    }
},  1000);

exports.printer = printer; 