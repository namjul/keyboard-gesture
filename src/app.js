if(DEBUG) {
  console.log('Running App version ' + VERSION);
}


/**
 * Module dependencies.
 */

require('./styles/index.js');
var page = require('./components/example/index.js');

console.log(page.log('Hello World'));


