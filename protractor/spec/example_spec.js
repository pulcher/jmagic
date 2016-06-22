'use strict';

describe('angularjs homepage', function() {
  // it('should greet the named user', function() {
  //   browser.get('http://127.0.0.1:9000');

  //   element(by.model('yourName')).sendKeys('Julie');

  //   var greeting = element(by.binding('yourName'));

  //   expect(greeting.getText()).toEqual('Hello Julie!');
  // });

  describe('todo list', function() {
    var todoList;

    beforeEach(function() {
      browser.get('http://127.0.0.1:9000');

      todoList = element.all(by.repeater('todo in todos'));
    });

    it('should list todos', function() {
      expect(todoList.count()).toEqual(0);
      //expect(todoList.get(1).getText()).toEqual('build an angular app');
    });

    it('should add a todo', function() {
      var addTodo = element(by.model('todo'));
      var addButton = element(by.css('[value="add"]'));

      addTodo.sendKeys('write a protractor test');
      addButton.click();

      expect(todoList.count()).toEqual(1);
      expect(todoList.get(2).getText()).toEqual('write a protractor test');
    });
  });
});
