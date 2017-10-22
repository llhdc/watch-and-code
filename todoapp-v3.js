/*
v3
objects

requirements
it should store the todos array on an object
it should have a displayTodos method
it should have an addTodo method
it should have a changeTodo method
it should have a deleteTodo method
*/

var todoList = {
  todos: ['item 1', 'item 2', 'item 3'],
  displayTodos: function() {
    console.log('My todos:', this.todos);
  },
  addTodo: function() {
    this.todos.push(todo);
    this.displayTodos();
  },
  changeTodo: function(position, newValue) {
    this.todos[position] = newValue;
    this.displayTodos();
  },
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  }
};
