//SELECTORS
document.querySelector('form').addEventListener('submit',handleSubmitForm);
document.querySelector('ul').addEventListener('click',handleClickDeleteOrCheck)

//EVENT HANDLER
function handleSubmitForm(e){
    e.preventDefault(); //prevent default action of submit
    let input = document.querySelector('input');

    if (input.value != ' ');
        addTodo (input.value)
    input.value = ' ';

}

function handleClickDeleteOrCheck(e){
    if(e.target.name == 'checkButton')
        checkTodo(e);

    if(e.target.name == 'deleteButton')
        checkTodo(e);

}

//HELPER
function addTodo(todo){
    let ul = document.querySelector('ul');
    let li = document.createElement('li');

    li.innerHTML = ` 

        <span class ="todo-items>${todo}</span>
        <button name ="checkButton"><i class = "fas fa-check-square"></i></button>
        <button name = "deleteButton"><i class ="fas fa-trash"></i></button>
    `;

    li.classList.add('todo-items');
    ul.appendChild(li);
    

}

function checkTodo(e){

    let item = e.target.parentNode;
   
}