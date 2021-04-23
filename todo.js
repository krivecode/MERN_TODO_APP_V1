const todos = [];

const todoForm = document.querySelector('#todoform');
const btn = document.querySelector('#btn');
const title = document.querySelector('#title');
const description = document.querySelector('#description');

btn.addEventListener('click',function(){

    const form = new FormData(todoForm);
    var formValues = {};

    for (var val of form.keys()) {
        formValues[val] = form.get(val);
    }

    var todo = getTodo(formValues.title, formValues.description)

    title.value = null;
    description.value = null;

    todos.push(todo);
    render(todos);

});


function getTodo(title,description) {

    var id;

    return {
        id,
        title,
        description,
        createdAt: new Date().toString(),
        status: 'active'
    };
}

function render(todos) {
    const todo_list = document.querySelector('.todo_list');

    const items = todos.map(todo => renderATodoItem(todo));

    todo_list.innerHTML = null;
     items.forEach(item => {
         todo_list.appendChild(item);
     });

}


function renderATodoItem(todo) {

    const mainRow = document.createElement('div');
    mainRow.className = 'row jumbotron section';

    const titleDiv = document.createElement('div');
    const descriptiondiv = document.createElement('div');
    const statusDiv = document.createElement('div');

    titleDiv.className = 'col-md-2';
    titleDiv.textContent = todo.title;

    descriptiondiv.className = 'col-md-2';
    descriptiondiv.textContent = todo.description;

    statusDiv.className = 'col-md-2';
    statusDiv.textContent = todo.status;

    let markCompleteDiv = document.createElement('div');
    markCompleteDiv.className = 'col-md-2';

    let statusBtn = document.createElement('button');
    statusBtn.className = 'btn btn-info';
    statusBtn.textContent = 'Mark Completed';

    statusBtn.addEventListener('click',() => {
        console.log(todo.id);
    });

    markCompleteDiv.appendChild(statusBtn);

    const actionsDiv = document.createElement('div');
    actionsDiv.className = 'col-md-4';

    const row = document.createElement('div');
    row.className = 'row';

    let editDiv = document.createElement('div');
    editDiv.className = 'col-md-3';

    statusBtn = document.createElement('button');
    statusBtn.className = 'btn btn-primary';
    statusBtn.textContent = 'Edit';

    editDiv.appendChild(statusBtn);

    row.appendChild(editDiv);

    let statusAction = document.createElement('div');
    statusAction.className = 'col-md-3';

    statusBtn = document.createElement('button');
    statusBtn.className = 'btn btn-danger';
    statusBtn.textContent = 'Delete';

    statusBtn.addEventListener('click', () => {
        console.log(todo.id);

     });

    statusAction.appendChild(statusBtn);

    row.appendChild(statusAction);

    actionsDiv.appendChild(row);

    mainRow.appendChild(titleDiv);
    mainRow.appendChild(descriptiondiv);
    mainRow.appendChild(statusDiv);
    mainRow.appendChild(markCompleteDiv);
    mainRow.appendChild(actionsDiv);

    return mainRow;
}
