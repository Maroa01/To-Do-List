//SELECTORS
document.querySelector('form').addEventListener('submit', handleSubmitForm);
document.querySelector('ul').addEventListener('click', handleClickDeleteOrCheck)

//EVENT HANDLER
function handleSubmitForm(e) {
    e.preventDefault(); //prevent default action of submit
    let taskInput = document.getElementById('task-input')
    console.log(taskInput.value)
    if (taskInput.value != ' ') {
        addTodo(taskInput.value)
    }
    taskInput.value = ' '
}

function handleClickDeleteOrCheck(e) {
    if (e.target.name == 'checkButton')
        checkTodo(e)

    if (e.target.name == 'deleteButton')
        checkTodo(e)
}

//HELPER
function addTodo(todo) {
    let listContainer = document.getElementById('todo-list')
    let listItem = document.createElement('li')
    listItem.innerHTML = `
    <button name ="checkButton"><i class = "fas fa-check-square"></i></button>
    <span class ="todo-items">${todo}</span>
    <button name = "deleteButton"><i class ="fas fa-trash"></i></button>
    `;
    listContainer.appendChild(listItem)
}

function checkTodo(e) {

    let item = e.target.parentNode

}