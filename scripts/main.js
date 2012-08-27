// Filename: main.js

// Require.js allows us to configure shortcut alias
// There usage will become more apparent futher along in the tutorial.
require.config({
  paths: {
    jquery: 'libs/jquery',
    underscore: 'libs/underscore',
    backbone: 'libs/backbone'
  },
  shim: {
    underscore: {
      exports: '_'
    },
    backbone: {
      deps: ['libs/jquery', 'libs/underscore'],
      exports: 'Backbone'
    },
    'backbone.marionette': {
      deps: ['libs/backbone'],
      exports: 'Backbone'
    }
  }
});

require([
  // Load our app module and pass it to our definition function
  'app',
  // Some plugins have to be loaded in order due to their non AMD compliance
  // Because these scripts are not "modules" they do not pass any values to the definition function below
  'order!libs/jquery',
  'order!libs/underscore',
  'order!libs/backbone',
  'order!libs/backbone.marionette'
],
function(App){
  // The "app" dependency is passed in as "App"
  // Again, the other dependencies passed in are not "AMD" therefore don't pass a parameter to this function
  App.initialize();
});