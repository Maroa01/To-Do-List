//SELECTORS
document.querySelector('form').addEventListener('submit', handleSubmitForm)


//EVENT HANDLER
function handleSubmitForm(e) {
    e.preventDefault(); //prevent default action of submit
    let taskInput = document.getElementById('task-input')
    if (taskInput.value != ' ') {
        addTodo(taskInput.value)
    }
    taskInput.value = ' '
}


function handleDelete() {
    let deleteButton = document.getElementById('delete-button')
    let listItemToDelete = deleteButton.parentElement
    listItemToDelete.remove()
}

function handleDeleteAll() {
    let allListItems = Array.from(document.getElementsByTagName('li'))
    allListItems.forEach(item => item.remove())
}

//HELPER
function addTodo(todo) {
    let listContainer = document.getElementById('todo-list')
    let listItem = document.createElement('li')
    listItem.innerHTML = `
    <button name ="checkButton"><i class = "fas fa-check-square"></i></button>
    <span class ="todo-items">${todo}</span>
    <button onclick="handleDelete()" id= "delete-button"><i class ="fas fa-trash"></i></button>
    `;
    listContainer.appendChild(listItem)
}


function checkTodo(e) {

    let item = e.target.parentNode

}