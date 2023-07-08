const newTodoInput = document.getElementById('new-todo');
const addTodoButton = document.getElementById('add-todo');
const todoItemList = document.getElementById('todo-items');

let todos = [];

const renderTodos = () => {
    todoItemList.innerHTML = '';
    
    todos.forEach((todo, index) =>{
        const li = document.createElement('li');
        li.textContent = todo;

        const button = document.createElement('button');
        button.textContent = 'Done'

        button.addEventListener('click', () => {
            deleteTodo(index);
        });

        li.appendChild(button);
        todoItemList.appendChild(li);
    });
};

const addTodo = () => {
    const newTodo =newTodoInput.value.trim();
    if(newTodo !== ''){
        todos.push(newTodo);
        newTodoInput.value = '';
        renderTodos();
    }
};

const deleteTodo = (index) => {
    todos.splice(index, 1);
    renderTodos();
};

newTodoInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      addTodo();
    }
  });

addTodoButton.addEventListener('click', addTodo);

renderTodos();
