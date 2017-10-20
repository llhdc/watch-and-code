// todo app
// v1
// arrays,
// console.log,
// .splice, delete array item  e.g todos.splice(0, 1) -- first param : item index position to begin deleting, second param : # of items to delete
// .push, add new item(s) to an array e.g. todos.push('new todo')

// requirements
// - it should have a place to store todos
let todos = ['item 1', 'item 2', 'item 3', 'item 4']

// - it should have a way to display todos
console.log('My todos:', todos);

// - it should have a way to add todos
todos.push('todo')

// - it should have a way to change a todo
todos[0] = 'new todo' // reassignment

// - it should have a way to delete todos
todos.splice(0, 1)

// v2
// functions
// requirements
// - it should have a way to display todos
function displayTodos(todos) {
  console.log('My todos:', todos);
}
// - it should have a way to add todos
function addTodo(todo) {
  todos.push(todo);
  displayTodos();
}
// - it should have a way to change a todo
function changeTodo(position, newTodo) {
  todos[position] = newTodo;
  displayTodos();
}
// - it should have a way to delete todos
function deleteTodo(position) {
  todos.splice(position, 1);
  displayTodos();
}

// v3
// objects

// let myMac = {
//   operatingSystem: 'mac',
//   screenSize: '15 inches',
//   purchaseYear: 2011
// }
//
// let leonard = {
//   name: 'Leonard',
//   sayName: function() {       // functions on objects are methods;
//     console.log(this.name);
//   }
// }

//requirements
// it should store the todos array on an object
// it should have a displayTodos method
// it should have an addTodo method
// it should have a changeTodo method
// it should have a deleteTodo method

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

// v4
// booleans

let todoList = {
  todos: [],
  displayTodos: function() {
    console.log('My todos:', this.todos);
  },
  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false // new todo will start out as incomplete
    });
    this.displayTodos();
  },
  changeTodo: function(position, todoText) {
    this.todos[position].todoText = todoText
    this.displayTodos();
  },
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  },
  toggleCompleted: function(position) {
    let todo = this.todos[position];
    todo.completed = !todo.completed
    this.displayTodos();
  }
};
