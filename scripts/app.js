require.config({
  shim: {
    underscore: {
      exports: '_'
    },
    backbone: {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    'backbone.marionette': {
      deps: ['backbone'],
      exports: 'Backbone'
    }
  }
});

require([
	'jquery',
	'backbone',
	'backbone.marionette'
],
function($, Backbone, Backbone) {
	console.log('hello app');
});