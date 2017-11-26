'use strict';

var app = {};

app.Todo = Backbone.Model.extend({
  defaults: {
    title: '',
    completed: false
  }
});

app.AppView = Backbone.View.extend({
  el: '#container',

  template: _.template('<h3>hello <%= who %></h3>'),

  initialize: function() {
    this.render();
  },

  // $el is a cached jQuery object
  render: function() {
    this.$el.html(this.template({ who: 'world' }));
  }
});

var appView = new app.AppView();
