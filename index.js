const todoContainer = document.querySelector('#todo-container');

function createTodoElement(text) {
  if (!text) return;
  const todoItemWrapper = document.createElement('li');
  const todoRemoveBtn = document.createElement('button');
  const todoTextEle = document.createElement('p');
  todoRemoveBtn.innerText = 'X';
  todoRemoveBtn.classList.add('btn','btn-outline-danger', 'btn-md', 'col-1');
  todoItemWrapper.classList.add('row', 'py-3', 'border-top', 'border-bottom', 'border-light-subtle');
  todoTextEle.classList.add('col-11', 'm-0');
  todoTextEle.innerText = text;
  todoItemWrapper.appendChild(todoTextEle);
  todoItemWrapper.appendChild(todoRemoveBtn);
  return todoItemWrapper
}

function addNewTodoItem(event) {
  const text = event.target.value;
  event.target.value = null;
  const newTodoItem = createTodoElement(text);
  todoContainer.appendChild(newTodoItem);
}