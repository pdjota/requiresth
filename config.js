require.config({
  baseUrl: "/Scripts/lib",
  hgn: { /* Hogan/Mustache template configuration */
    templateExtension: ''
  },
  paths: {
    jquery: 'jquery-1.9.1',
    backbone: 'backbone',
    underscore: 'underscore',
    shared: '../modules/shared'
  },
  shim: {
    'jquery': {
      exports: ['$']
    },
    'jquery-shorten': {
      deps: ['jquery'],
      exports: '$'
    },
    'underscore': {
      exports: '_'
    }
    'backbone': {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    }
  }
});
require([
  'jquery',
  'underscore',
  'backbone',
  'routers/application'
],
  function ($, _, Backbone, Bootstrap, AppRouter) {
    $(document).ajaxSend(ErrorManager.ajaxSend);
    $(document).ajaxError(ErrorManager.ajaxError);
    $(document).ajaxSuccess(ErrorManager.ajaxSuccess);
    var homeRouter = new HomeRouter();
    var profileRouter = new ProfileRouter();
    Backbone.history.start();
    return homeRouter;
  });