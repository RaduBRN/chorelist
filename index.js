let todos = [];

const input = document.getElementById('input');
const addBtn = document.getElementById('add');
const deleteBtn = document.getElementById('delete');
const todosDiv = document.getElementById('todos');

addBtn.addEventListener('click', function() {
    todos.push(input.value);
    input.value = '';
    renderTodos();
})

deleteBtn.addEventListener('click', function() {
    todos = [];
    renderTodos();
})

function renderTodos() {
    todosDiv.innerHTML = '';
    for (let i = 0; i < todos.length; i++) {
        const button = document.createElement('button');
        button.className = 'todo';
        button.id = `todo-${i}`;
        button.textContent = todos[i];
        button.addEventListener('click', function() {
            todos.splice(i, 1);
            renderTodos();
        });
        todosDiv.appendChild(button);
    }
}
