'use strict';

angular.module('hwstudio')
  .factory('gui', function() {
    return require('nw.gui');
    //return window.require('nw.gui');
  })
  .factory('window', function() {
    return require('nw.gui').Window;
    //return window.require('nw.gui').Window;
  })
  .factory('_package', function() {
    return require('./package.json');
    //return require('../../package.json');
  });
