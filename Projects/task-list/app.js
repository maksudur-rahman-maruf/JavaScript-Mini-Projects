// Define UI Vars

const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

loadEventListeners();

    // Load all event listeners
    function loadEventListeners() {

    // DOM Load Event
    document.addEventListener('DOMContentLoaded', getTasks);
    // add new event
    form.addEventListener('submit', addTask);

    // Remove task event
    taskList.addEventListener('click', removeTask);

    // Clear All Tasks
    clearBtn.addEventListener('click', clearTasks);

    // Filter tasks event
    filter.addEventListener('keyup', filterTasks);   
      
}

// Get tasks from Local Storage
function getTasks() {

    let tasks;
        if(localStorage.getItem('tasks') === null) {
            tasks = [];
        } else {
            tasks = JSON.parse(localStorage.getItem('tasks'));
        }

        tasks.forEach(function(task){

            const li = document.createElement('li');
            li.className = 'collection-item';
            li.appendChild(document.createTextNode(task));
    
            // create new link element
            const link = document.createElement('a');
            link.className = 'delete-item secondary-content';
        
            //Add icon html
            link.innerHTML = '<i class="fa fa-remove"></i>';
    
            li.appendChild(link);
    
            taskList.appendChild(li);

        });



}

function addTask(e) {  
    if(taskInput.value === ''){
        alert('Add a task');
    }

    // create li element
    const li = document.createElement('li');
    li.className = 'collection-item';
    li.appendChild(document.createTextNode(taskInput.value));

    // create new link element
    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    
    //Add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';

    li.appendChild(link);

    taskList.appendChild(li);

    // Store in Local Storage
    storeTaskInLocalStorage(taskInput.value);

    taskInput.value = '';


    e.preventDefault();
}

    // Store Tasks 
    function storeTaskInLocalStorage(task) {
        let tasks;
        if(localStorage.getItem('tasks') === null) {
            tasks = [];
        } else {
            tasks = JSON.parse(localStorage.getItem('tasks'));
        }

        tasks.push(task);

        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    

 // Remove Task

 function removeTask(e) {
    
    if(e.target.parentElement.classList.contains('delete-item')) {
        if(confirm('Are you sure?')) {
            e.target.parentElement.parentElement.remove();

            // remove from Local Storage
            removeTaskFromLocalStorage( e.target.parentElement.parentElement);

        }
    }
      
 }

 // Remove from Local Storage
 function removeTaskFromLocalStorage(taskItem) {

    let tasks;
    if(localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task, index) {

       if(taskItem.textContent === task) {
           tasks.splice(index, 1);
       }

       localStorage.setItem('tasks', JSON.stringify(tasks));

    });

 }

 // Clear Tasks

 function clearTasks() {

    //  tasklist.innerHTML = '';
    
    //Faster
    while(taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }

    // Clear from Local storage
    clearFromLocalStorage();

 }

 // Clear form local Storage
 function clearFromLocalStorage() {
     localStorage.clear();
 }

 // Filter Tasks
 function filterTasks(e) {
     const text = e.target.value.toLowerCase();

     document.querySelectorAll('.collection-item').forEach(function(task){
        const item = task.firstChild.textContent;
        if(item.toLowerCase().indexOf(text) != -1) {
            task.style.display = 'block';
        } else {
            task.style.display = 'none';
        }
     });
     
 }

