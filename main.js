
function startWorkers(i)
{

var workerID;
var resultList = [];


//if (typeof(Worker) !== "undefined") {
//    // Yes! Web worker support!
//    // Some code.....
//} else {
//    alert("Sorry! No Web Worker support.");
//}

//if (typeof(worker1) == "undefined") { var worker1 = new Worker('worker.js'); }
//if (typeof(worker2) == "undefined") { var worker2 = new Worker('worker.js'); }


function createWorker(workerID) {
    return new Promise(function(resolve) {
        var v = new Worker('worker1.js');
        v.postMessage(workerID);
        v.onmessage = function(event){
            resolve(event.data);
        };
    });
}




var promises = [];
for(var workerID = 0; workerID < 100; workerID++) { promises.push(createWorker(workerID)); }
        
Promise.all(promises).then(function(data) { alert(data); });

}
