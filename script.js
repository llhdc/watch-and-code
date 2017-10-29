/*
v10
requirements
- there should be a way to create delete buttons
- there should be a delete button for each todo
- each li should have an id that has the todo position
- delete buttons should have access to the todo li
- clicking delete should update todoList.todos and the DOM
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
  },
  changeTodo: function(position, todoText) {
    this.todos[position].todoText = todoText;
  },
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
  },
  toggleCompleted: function(position) {
    let todo = this.todos[position];
    todo.completed = !todo.completed
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
  }
};

let handlers = {
  addTodo: function() {
    let addTodoTextInput = document.getElementById('addTodoTextInput');
    todoList.addTodo(addTodoTextInput.value);
    addTodoTextInput.value = '';
    view.displayTodos();
  },
  changeTodo: function() {
    let changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
    let changeTodoTextInput = document.getElementById('changeTodoTextInput');
    todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
    changeTodoPositionInput.value = '';
    changeTodoTextInput.value = '';
    view.displayTodos();
  },
  deleteTodo: function() {
    let deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput');
    todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
    deleteTodoPositionInput.value = '';
    view.displayTodos();
  },
  toggleCompleted: function() {
    let toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
    todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
    toggleCompletedPositionInput.value = '';
    view.displayTodos();
  },
  toggleAll: function(){
    todoList.toggleAll();
    view.displayTodos();
  }
};

let view = {
  displayTodos: function() {
    let todosUl = document.querySelector('ul');
    todosUl.innerHTML = '';
    for (let i = 0; i < todoList.todos.length; i++) {
      let todoLi = document.createElement('li');
      let todo = todoList.todos[i];
      let todoTextWithCompletion = '';

      if (todo.completed === true) {
        todoTextWithCompletion = '[x] ' + todo.todoText
      } else {
        todoTextWithCompletion = '[] ' + todo.todoText
      }

      todoLi.id = i;
      todoLi.textContent = todoTextWithCompletion;
      todoLi.appendChild(this.createDeleteButton()); // returns delete button and appendChild will append to todoLi
      todosUl.appendChild(todoLi);
    }
  }
},
  createDeleteButton: function() {
    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'deleteButton';
    return deleteButton;
  }
};

let todosUl = document.querySelector('ul');

todosUl.addEventListener('click', function(event) {
  console.log(event.target.parentNode.id);
});
