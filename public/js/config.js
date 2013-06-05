require.config({
  baseUrl: '/js',
  paths: {
    'base':     'lib/base',
    'director': 'lib/director'
  },
  shim: {
    'underscore': {
      exports: '_'
    }
  }
});
require([
  'base',
  'director'
], function () {
  window.app = {};
});