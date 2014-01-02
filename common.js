/*
 * George 'papanikge' Papanikolaou 2013
 * Common functions and code that all(?) algorithms use
 */

var max = function maxF(a, b) {
  return (a > b) ? a:b;
}

/*
 * Helper method that appends text to a log container for logging purposes.
 * Of course needs a #logscontainer div
 */
var addLog = function addLogF(log) {
  var div = document.getElementById("logscontainer");
  div.innerHTML = div.innerHTML + "<br>" + log;
}

/*
 * Returns a random integer between min and max
 * Yields a non-uniform distribution!
 */
var getRandomInt = function getRandomIntF(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
