'use strict';

var AppView = Backbone.View.extend({
  el: '#container',

  initialize: function() {
    this.render();
  },

  // $el is a cached jQuery object
  render: function() {
    this.$el.html('hello world');
  }
});

var appView = new AppView();
