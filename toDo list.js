var taskInput=document.getElementById("new-task");
var addButton=document.getElementsByTagName("button")[0];
var incompleteTaskHolder=document.getElementById("incomplete-tasks");
var completedTasksHolder=document.getElementById("completed-tasks");


//New task list item
var createNewTaskElement=function(taskString){

	var listItem=document.createElement("li");

	//input (checkbox)
	var checkBox=document.createElement("input");
	//label
	var label=document.createElement("label");
	//input (text)
	var editInput=document.createElement("input");
	//button.edit
	var editButton=document.createElement("button");

	//button.delete
	var deleteButton=document.createElement("button");

	label.innerText=taskString;

	//Each elements, needs appending
	checkBox.type="checkbox";
	editInput.type="text";

	editButton.innerText="Edit";//innerText encodes special characters, HTML does not.
	editButton.className="edit";
	deleteButton.innerText="Delete";
	deleteButton.className="delete";

	//and appending.
	listItem.appendChild(checkBox);
	listItem.appendChild(label);
	listItem.appendChild(editInput);
	listItem.appendChild(editButton);
	listItem.appendChild(deleteButton);
	return listItem;
}
var addTask=function(){
	console.log("Add Task...");
	//Create a new list item with the text from the #new-task:
	var listItem=createNewTaskElement(taskInput.value);

	//Append listItem to incompleteTaskHolder
	incompleteTaskHolder.appendChild(listItem);
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

		//toggle .editmode on the parent.
		listItem.classList.toggle("editMode");
}

//Delete task.
var deleteTask=function(){
		console.log("Delete Task...");

		var listItem=this.parentNode;
		var ul=listItem.parentNode;
		//Remove the parent list item from the ul.
		ul.removeChild(listItem);
}
//Mark task completed
var taskCompleted=function(){
		console.log("Complete Task...");
	//Append the task list item to the #completed-tasks
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
addButton.onclick=addTask;
addButton.addEventListener("click",addTask);
addButton.addEventListener("click",ajaxRequest);

var bindTaskEvents=function(taskListItem,checkBoxEventHandler){
	console.log("bind list item events");

	var checkBox=taskListItem.querySelector("input[type=checkbox]");
	var editButton=taskListItem.querySelector("button.edit");
	var deleteButton=taskListItem.querySelector("button.delete");


			//Bind editTask to edit button.
			editButton.onclick=editTask;
			//Bind deleteTask to delete button.
			deleteButton.onclick=deleteTask;
			//Bind taskCompleted to checkBoxEventHandler.
			checkBox.onchange=checkBoxEventHandler;
}
	for (var i=0; i<incompleteTaskHolder.children.length;i++){

		bindTaskEvents(incompleteTaskHolder.children[i],taskCompleted);
	}

	for (var i=0; i<completedTasksHolder.children.length;i++){
		bindTaskEvents(completedTasksHolder.children[i],taskIncomplete);
	}

