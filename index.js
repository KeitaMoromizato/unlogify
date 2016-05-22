'use strict';

var config;

switch (process.env.NODE_ENV) {
  case 'production':
    config = function(logger) {
      return function(){};
    };
    break;
  
  default:
    config = function(logger) {
      return logger || console.log;
    };
}

module.exports = config;
