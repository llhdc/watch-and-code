/*
v2
functions
requirements
*/
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
