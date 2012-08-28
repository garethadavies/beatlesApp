// Require.js allows us to configure shortcut alias
require.config({
  // The shim config allows us to configure dependencies for
  // scripts that do not call define() to register a module
  shim: {
    'underscore': {
      exports: '_'
    },
    'backbone': {
      deps: [
        'underscore',
        'jquery'
      ],
      exports: 'Backbone'
    }
  },
  paths: {
    jquery: 'libs/jquery',
    underscore: 'libs/underscore',
    backbone: 'libs/backbone',
    text: 'libs/text'
  }
});

require([
  'views/app',
  'routers/router'
], function(AppView, Workspace) {
  console.log('first require');
  // // Initialize routing and start Backbone.history()
  // new Workspace();
  // Backbone.history.start();

  // // Initialize the application view
  // new AppView();
});