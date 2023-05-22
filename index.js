const todoContainer = document.querySelector('.todo-container');

function createTodoElement(text) {
  const todoItemWrapper = document.createElement('li');
  const todoRemoveBtn = document.createElement('button');
  todoRemoveBtn.innerText = 'Delete';
  todoItemWrapper.innerHTML = text;
  todoItemWrapper.appendChild(todoRemoveBtn);
  return todoItemWrapper
}

function addNewTodoItem(event) {
  const text = event.target.value;
  event.target.value = null;
  const newTodoItem = createTodoElement(text);
  todoContainer.appendChild(newTodoItem);
}