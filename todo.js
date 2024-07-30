document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('todo-form');
    const taskInput = document.getElementById('new-task');
    const taskList = document.getElementById('todo-list');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        addTask(taskInput.value);
        taskInput.value = '';
    });

    taskList.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            deleteTask(e.target);
        } else if (e.target.tagName === 'LI') {
            toggleTaskCompletion(e.target);
        }
    });

    function addTask(task) {
        const li = document.createElement('li');
        li.textContent = task;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        li.appendChild(deleteButton);
        taskList.appendChild(li);
    }

    function deleteTask(button) {
        const li = button.parentElement;
        taskList.removeChild(li);
    }

    function toggleTaskCompletion(li) {
        li.classList.toggle('completed');
    }
});
