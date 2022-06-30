let form = document.getElementById('task-form');
let list = document.getElementById('tasks');

function addItem(taskDescribe){
    let tasksContainer = document.createElement('div');
    let newTaskCheckbox = document.createElement('input');
    let newTaskName = document.createElement('label');
    let taskDescription = document.createTextNode(taskDescribe);

    tasksContainer.setAttribute('class', 'taskList')

    newTaskCheckbox.setAttribute('type', 'checkbox');
    newTaskCheckbox.setAttribute('name', taskDescribe);

    newTaskName.setAttribute('for', taskDescribe);
    newTaskName.appendChild(taskDescription);

    tasksContainer.appendChild(newTaskCheckbox);
    tasksContainer.appendChild(newTaskName);

    list.appendChild(tasksContainer);
}

form.addEventListener('submit', function(e){
    let task = document.getElementById('task-input');
    if (task.value != '') {
        addItem(task.value);
        e.preventDefault();
        form.reset();
        form.focus();
    } else {
        alert('Put a valid value! Different of null!');
        e.preventDefault();
        form.focus();
    }
});