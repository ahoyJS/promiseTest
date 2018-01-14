
function startWorkers(i)
{

var i=20000000;
var resultList = [];


//if (typeof(Worker) !== "undefined") {
//    // Yes! Web worker support!
//    // Some code.....
//} else {
//    alert("Sorry! No Web Worker support.");
//}

//if (typeof(worker1) == "undefined") { var worker1 = new Worker('worker.js'); }
//if (typeof(worker2) == "undefined") { var worker2 = new Worker('worker.js'); }


function createWorker(i) {
    return new Promise(function(resolve) {
        var v = new Worker('worker1.js');
        v.postMessage(i);
        v.onmessage = function(event){
            resolve(event.data);
        };
    });
}




var promises = [];
for(var i = 0; i < 100; i++) { promises.push(createWorker(i)); }
        
Promise.all(promises).then(function(data) { alert(data); });

}
