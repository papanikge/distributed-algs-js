/*
 * George 'papanikge' Papanikolaou 2013
 * Common functions and code that all(?) the algorithms use
 */

/*
 * Helper method that appends text to a log container for logging purposes.
 * Of course needs a #logscontainer div
 */
function addLog(log) {
  var div = document.getElementById("logscontainer");
  div.innerHTML = div.innerHTML + "<br>" + log;
}

/*
 * Returns a random integer between min and max
 * Yields a non-uniform distribution!
 */
function getRandomInt (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
