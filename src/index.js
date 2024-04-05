document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById('create-task-form');
  const taskList = document.getElementById('tasks');

  form.addEventListener('submit', function(event) {
    event.preventDefault();    //Prevents the default form submission behavior

    //Retrieve the task description input value
    const taskInput = document.getElementById('new-task-description');
    const taskDescription = taskInput.value;

    //Create a new list item element and add the task description
    const newTask = document.createElement('li');
    newTask.textContent = taskDescription;


    //Add delete button to each task
    const deleteButton = document.createElement('button');
    deleteButton.textContent = '\u274C';
    deleteButton.addEventListener('click', function () {
      newTask.remove();
    });
    newTask.appendChild(deleteButton);


    //Add priority dropdown
    const prioritySelect = document.createElement('select');
    prioritySelect.innerHTML = `
       <option value = "low">Low</option>
       <option value = "medium">Medium</option>
       <option value = "high">High</option>
       `;

       prioritySelect.addEventListener('change', function () {
        newTask.style.colour = this.value;

       });
       newTask.appendChild(prioritySelect);


    //Append the new task to the task list
    taskList.appendChild(newTask);

    //Clear the input field after adding the task to the list
    taskInput.value = '';
  });


 //Sorting functionality
  const sortButton = document.getElementById('sort-button');
  sortButton.addEventListener('click', function() {
    const tasks = Array.from(taskList.children);
    tasks.sort((a,b) => {
      return a.lastChild.value.localeCompare(b.lastChild.value);
    });

    taskList.innerHTML = '';
    tasks.forEach(task => {
      taskList.appendChild(task);
    });
  });
});
  

