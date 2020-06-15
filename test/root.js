require('babel-register')();
import regeneratorRuntime from "regenerator-runtime";
import "regenerator-runtime/runtime.js";

var exposedProperties = ['window', 'navigator', 'document'];

var jsdom = require('jsdom').jsdom;

global.document = jsdom('');
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js'
};