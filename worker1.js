

importScripts('math.js');

var q=1;
var iii;

// this.onmessage needs to be here so that the worker starts running with the right input

this.onmessage = function(messageIn) {  for ( iii = 0; iii < 20000000-messageIn.data*100000; iii++) { q++;}; postMessage(q+math.eval('0')); }


