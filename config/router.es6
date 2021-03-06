var Router = Ember.Router.extend({
  // Uncomment to change Ember's router to use the
  // HTML5 History API
  // Please note that not all browsers support this!
  // You will also need to uncomment the greedy route matcher
  // in config/routes.rb

  location: 'history'
});

Router.map(function() {
  this.resource('clients', function() {
    this.route('new');
    this.route('show', {path: ':client_id'});
    this.route('edit', {path: ':client_id/edit'});
  });

  this.resource('about', function() {

  });

});

export default Router;
