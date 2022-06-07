//SELECTORS
document.querySelector('form').addEventListener('submit', handleSubmitForm)

window.addEventListener('load', () => {
    let listContainer = document.getElementById('todo-list')
    //check to see if any items already exist
    const persistedList = JSON.parse(localStorage.getItem('stored-items'))
    console.log(persistedList)
    //add all pre-existing items into the list and display them
    persistedList.map((item, idx) => {
        let listItem = document.createElement('li')
        listItem.innerHTML = item
        console.log(listItem)
        listContainer.appendChild(listItem)
    })
})

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
    //check the persisted items
    const persistedList = JSON.parse(localStorage.getItem('stored-items'))
    console.log(persistedList)
    let deleteButton = document.getElementById('delete-button')
    let listItemToDelete = deleteButton.parentElement
    let itemToUnPersist = deleteButton.parentElement.innerHTML
    //check the persisted items in localStorage and delete the item whose delete button is clicked
    let newListToPersist = persistedList.filter(item => item !== itemToUnPersist)
    console.log(newListToPersist)
    localStorage.setItem('stored-items', JSON.stringify(newListToPersist))
    listItemToDelete.remove()
}

function handleDeleteAll() {
    let allListItems = Array.from(document.getElementsByTagName('li'))
    allListItems.forEach(item => item.remove())
    //delete them all from localStorage as well
    localStorage.removeItem('stored-items')
}

//HELPER
function addTodo(todo) {
    const htmlToAppend = `<button name ="checkButton"><i class = "fas fa-check-square"></i></button>
    <span class ="todo-items">${todo}</span>
    <button onclick="handleDelete()" id= "delete-button"><i class ="fas fa-trash"></i></button>
    `;
    //check to see if any items already exist (that were persisted)
    let storedItems = JSON.parse(localStorage.getItem('stored-items')) || []
    console.log(storedItems)
    //add this current item to that list and then persist them altogether
    let listContainer = document.getElementById('todo-list')
    let listItem = document.createElement('li')
    listItem.innerHTML = htmlToAppend
    storedItems.push(listItem.innerHTML)
    localStorage.setItem('stored-items', JSON.stringify(storedItems))
    listContainer.appendChild(listItem)
}


function checkTodo(e) {
    let item = e.target.parentNode
}