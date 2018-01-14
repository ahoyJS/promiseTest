

importScripts('math.js');

var q=1;
var iii;

// this.onmessage needs to be here so that the worker starts running with the right input

this.onmessage = function(messageIn) {  for ( iii = 0; iii < messageIn.data; iii++) { q++;}; postMessage(math.eval('1+1')); }


