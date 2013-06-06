/*jshint laxbreak:true */
define([
  'hgn!../templates/item'
], function (hgnTemplate) {
  'use strict';

  /**
   * Sets up defaults for all the View methods such as a default template
   *
   * @constructor
   */
  function View() {
    this.template = hgnTemplate;
  }

  /**
   * Creates an <li> HTML string and returns it for placement in your app.
   *
   * NOTE: In real life you should be using a templating engine such as Mustache
   * or Handlebars, however, this is a vanilla JS example.
   *
   * @param {object} data The object containing keys you want to find in the
   *                      template to replace.
   * @returns {string} HTML String of an <li> element
   *
   * @example
   * view.show({
   *  id: 1,
   *  title: "Hello World",
   *  completed: 0,
   * });
   */
  View.prototype.show = function (data) {
    var i, l;
    var view = '';
    var view = this.template({
      todos: data,
      isComplete: function () {
        return this.completed === 1;
      }
    });
    return view;
  };

  /**
   * Displays a counter of how many to dos are left to complete
   *
   * @param {number} activeTodos The number of active todos.
   * @returns {string} String containing the count
   */
  View.prototype.itemCounter = function (activeTodos) {
    var plural = activeTodos === 1 ? '' : 's';

    return '<strong>' + activeTodos + '</strong> item' + plural + ' left';
  };

  /**
   * Updates the text within the "Clear completed" button
   *
   * @param  {[type]} completedTodos The number of completed todos.
   * @returns {string} String containing the count
   */
  View.prototype.clearCompletedButton = function (completedTodos) {
    if (completedTodos > 0) {
      return 'Clear completed (' + completedTodos + ')';
    } else {
      return '';
    }
  };

  // Export
  return View;
});
