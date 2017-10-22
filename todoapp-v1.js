/*
todo app
v1
arrays,
console.log,
.splice, delete array item  e.g todos.splice(0, 1) -- first param : item index position to begin deleting, second param : # of items to delete
.push, add new item(s) to an array e.g. todos.push('new todo')
*/

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
