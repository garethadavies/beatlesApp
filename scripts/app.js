// require.config({
//   shim: {
//     underscore: {
//       exports: '_'
//     },
//     backbone: {
//       deps: ['underscore', 'jquery'],
//       exports: 'Backbone'
//     },
//     'backbone.marionette': {
//       deps: ['backbone'],
//       exports: 'Backbone'
//     }
//   }
// });

// require([
// 	'jquery',
// 	'backbone',
// 	'backbone.marionette',
// 	'order!models/albumModel',
// 	'order!models/trackModel'
// ],
// function($, Backbone, Backbone, Album, Track) {

// 	var Router = Backbone.Router.extend({
    
//     routes: {
//       '': 'main'
//     },

//     main: function(){

//     	console.log('app started');

//       // var tasks = new Todo.Collection();
//       // var view = new MasterView({collection: tasks});
//       // tasks.fetch({
//       //   success: function(tasks){
//       //     $("#container").html(view.render().el).show();
//       //   }
//       // });

//     }

//   });

// });