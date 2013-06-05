require.config({
  baseUrl: '/js',
  paths: {
    'base':     'lib/base',
    'director': 'lib/director'
  },
  shim: {
    'director': {
      exports: 'Router'
    },
    'base': { /* Underscore for templating */
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