/*
v9
requirements
- there should be an li element for every todo
- each li element should contain .todoText
- each li element should show .completed
*/

let todoList = {
  todos: [],
  displayTodos: function() {
    if (this.todos.length === 0) {
      console.log('Your todo list is empty!');
    } else {
      console.log('My todos:');
      for (let i = 0; i < this.todos.length; i++) {
        if (this.todos[i].completed === true) {
          console.log('[x] ', this.todos[i].todoText);
        } else {
          console.log('[ ] ', this.todos[i].todoText);
        }
      }
    }
  },
  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    this.displayTodos();
  },
  changeTodo: function(position, todoText) {
    this.todos[position].todoText = todoText;
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
  },
  toggleAll: function() {
    let totalTodos = this.todos.length;
    let completedTodos = 0;

    // Count completed todos.
    for (let i = 0; i < totalTodos; i++) {
      if (this.todos[i].completed === true) {
        completedTodos++;
      }
    }

    // Case 1: if everything's true, make everything false.
    if (completedTodos === totalTodos) {
      for (let i = 0; i < totalTodos; i++) {
        this.todos[i].completed = false;
      }
    // Case 2: Otherwise, make everything true.
    } else {
      for (let i = 0; i < totalTodos; i++) {
        this.todos[i].completed = true;
      }
    }

    this.displayTodos();
  }
};

let handlers = {
  displayTodos: function() {
    todoList.displayTodos();
  },
  addTodo: function() {
    let addTodoTextInput = document.getElementById('addTodoTextInput');
    todoList.addTodo(addTodoTextInput.value);
    addTodoTextInput.value = '';
  },
  changeTodo: function() {
    let changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
    let changeTodoTextInput = document.getElementById('changeTodoTextInput');
    todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
    changeTodoPositionInput.value = '';
    changeTodoTextInput.value = '';
  },
  deleteTodo: function() {
    let deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput');
    todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
    deleteTodoPositionInput.value = '';
  },
  toggleCompleted: function() {
    let toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
    todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
    toggleCompletedPositionInput.value = '';
  },
  toggleAll: function(){
    todoList.toggleAll();
  }
};

let view = {
  
}
