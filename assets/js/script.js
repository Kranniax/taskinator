var formEl = document.querySelector("#task-form");
var taskToDoEl = document.querySelector("#tasks-to-do");

var taskFormHandler = function (event) {
  event.preventDefault();

  var taskNameInput = document.querySelector("input[name='task-name']").value;
  var taskTypeInput = document.querySelector("select[name='task-type']").value;

  // Empty strings and the number 0 are evaluated as falsy value. 
  // When using !taskNameInput, we are checking if the variable is empty, by
  // asking if it's a falsy value.
  if (!taskNameInput || !taskTypeInput) {
    alert("You need to fill out the task form!");
    return false;
  }

  // Reset the form inputs after a submission. 
  formEl.reset();

  //package up data as object.
  var taskDataObj = {
    name: taskNameInput,
    type: taskTypeInput,
  };

  // send it as an argument to createTaskEl
  createTaskEl(taskDataObj);
};

var createTaskEl = function (taskDataObj) {
  // create list item
  var listItemEl = document.createElement("li");
  listItemEl.className = "task-item";

  // create div to hold task info and add to list item.
  var taskInfoEl = document.createElement("div");
  // give it a class name
  taskInfoEl.className = "task-info";

  // add html content to div
  taskInfoEl.innerHTML =
    "<h3 class='task-name'>" +
    taskDataObj.name +
    "</h3><span class='task-type'>" +
    taskDataObj.type +
    "</span>";

  listItemEl.appendChild(taskInfoEl);

  //add entire list item to list.
  taskToDoEl.appendChild(listItemEl);
};

formEl.addEventListener("submit", taskFormHandler);
