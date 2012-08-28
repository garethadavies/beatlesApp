require.config({
	
	paths: {
    'backbone': 'libs/backbone',
    'underscore': 'libs/underscore',
    'jquery': 'libs/jquery'
  },
  shim: {
    underscore: {
      exports: '_'
    },
    backbone: {
      deps: ['libs/jquery', 'libs/underscore'],
      exports: 'Backbone'
    }
  }

});

require([

	'libs/jquery'

], function($, _, Backbone) {

	var Router = Backbone.Router.extend({
    
    routes: {
      '': 'main'
    },

    main: function(){

    	console.log('app started');

      // var tasks = new Todo.Collection();
      // var view = new MasterView({collection: tasks});
      // tasks.fetch({
      //   success: function(tasks){
      //     $("#container").html(view.render().el).show();
      //   }
      // });

    }

  });

});