require.config({
  baseUrl: '/js',
  hgn: { /* Hogan/Mustache template configuration */
    templateExtension: '.html'
  },
  paths: {
    'director': 'lib/director'
  },
  shim: {
    'director': {
      exports: 'Router'
    },
    'underscore': {
      exports: '_'
    }
  }
});
requirejs(['app'], function (app) {
  app.init();
});