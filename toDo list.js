var taskInput = document.getElementById("new-task");
var addButton = document.getElementsByTagName("button")[0];
var incompleteTaskHolder = document.getElementById("incomplete-tasks");
var completedTasksHolder = document.getElementById("completed-tasks");
var url = 'https://crudcrud.com/api/e866d5bd4ae6408f98a0fbdb048bb996/todolist';

var createNewTaskElement=function(taskString){
	var listItem=document.createElement("li");
	var checkBox=document.createElement("input");
	var label=document.createElement("label");
	var editInput=document.createElement("input");
	var editButton=document.createElement("button");
	var deleteButton=document.createElement("button");

	label.innerText=taskString;
	checkBox.type="checkbox";
	editInput.type="text";
	editButton.innerText="Edit";
	editButton.className="edit";
	deleteButton.innerText="Delete";
	deleteButton.className="delete";

	listItem.appendChild(checkBox);
	listItem.appendChild(label);
	listItem.appendChild(editInput);
	listItem.appendChild(editButton);
	listItem.appendChild(deleteButton);
	return listItem;
}
var addTask=function(){
	console.log("Add Task...");
	var listItem=createNewTaskElement(taskInput.value);
	incompleteTaskHolder.appendChild(listItem);
	
	
	var data = {
	  "task": taskInput.value
	};

	fetch(url, {
		method: 'POST',
		headers: {
		  'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	  })
	  .then(response => response.json())
	  .then(data => console.log(data))
	  .catch(error => console.error(error))

	  bindTaskEvents(listItem, taskCompleted);
	  taskInput.value="";
}
  
var editTask=function(){
	console.log("Edit Task...");
	console.log("Change 'edit' to 'save'");
	var listItem=this.parentNode;
	var editInput=listItem.querySelector('input[type=text]');
	var label=listItem.querySelector("label");
	var containsClass=listItem.classList.contains("editMode");
	if(containsClass){
		label.innerText=editInput.value;
	}else{
		editInput.value=label.innerText;
	}
	listItem.classList.toggle("editMode");
}
var deleteTask=function(){
	console.log("Delete Task...");

	var listItem=this.parentNode;
	var ul=listItem.parentNode;
	ul.removeChild(listItem);
}
var taskCompleted=function(){
	console.log("Complete Task...");

	var listItem=this.parentNode;
	completedTasksHolder.appendChild(listItem);
	bindTaskEvents(listItem, taskIncomplete);
}
var taskIncomplete=function(){
	console.log("Incomplete Task...");
	var listItem=this.parentNode;
	incompleteTaskHolder.appendChild(listItem);
	bindTaskEvents(listItem,taskCompleted);
}
var ajaxRequest=function(){
	console.log("AJAX Request");
}
  


// addButton.onclick=addTask;
addButton.addEventListener("click",addTask);
addButton.addEventListener("click",ajaxRequest);

var bindTaskEvents=function(taskListItem,checkBoxEventHandler){
	console.log("bind list item events");

	var checkBox=taskListItem.querySelector("input[type=checkbox]");
	var editButton=taskListItem.querySelector("button.edit");
	var deleteButton=taskListItem.querySelector("button.delete");

	editButton.onclick=editTask;
	deleteButton.onclick=deleteTask;
	checkBox.onchange=checkBoxEventHandler;
}

for (var i=0; i<incompleteTaskHolder.children.length;i++){
	bindTaskEvents(incompleteTaskHolder.children[i],taskCompleted);
}

for (var i=0; i<completedTasksHolder.children.length;i++){
	bindTaskEvents(completedTasksHolder.children[i],taskIncomplete);
}

fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
		console.log(data);
      data.forEach(function(task) {
		console.log(task.task);
        var listItem = createNewTaskElement(task.task);

        if (task.completed) {
          completedTasksHolder.appendChild(listItem);
          listItem.querySelector("input[type=checkbox]").checked = true;
		
        } else {
          incompleteTaskHolder.appendChild(listItem);
        }
        bindTaskEvents(listItem, task.completed ? taskIncomplete : taskCompleted);
      });
    })
    .catch(function(error) {
      console.error(error);
    });
