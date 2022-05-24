//SELECTORS
document.querySelector('form').addEventListener('submit',handleSubmitForm);

//EVENT HANDLER
function handleSubmitForm(e){
    e.preventDefault(); //prevent default action of submit
        let input = document.querySelector('input');

    if (input.value != ' ');
        addTodo (input.value)
        input.value = ' ';

}

//HELPER
function addTodo(todo){
    let ul = document.querySelector('ul');
    let li = document.createElement('li');

    

}