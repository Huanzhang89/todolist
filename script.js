//Each function should only do one thing. And we also want to separate the data (model) from the html (view). This is done with like a manager (controller). This is a basic MVC separation that you'll have heard of (or will have heard of). It makes things easier for you to update things and change things as your data isn't mixed up with your html etc. 

//So for instance here it's actually super difficult to delete your todo item, you have to delete the html and then you have to update the array

//I'm going to refactor your JS so it's more MVC like, it doesn't have to be pure MVC, but just separate your functions so it reads better. Make sure your functions only do one thing and they are named accordingly. It's in maths. Shwoing you're working out

var inputField = document.getElementById('todoText');
var todoList = new Array();
var uList = document.getElementById('TodoTable');
var addButton = document.getElementById('addTodo');
var uListChild = document.getElementById('TodoTable').childNodes;
var testButton = document.getElementById('testBtn');



var addTodo = function (todoText) {
	addToArray(todoText);
	refreshList();
};


/*
var deleteItem = function() {
	if (uList.childNodes)	
};
*/

var addToArray = function(todoText) {
	var id;
	for (var i=0; i<todoList.length; i++) {
		id = i;
		console.log(id);
	}
	var todoObject = {
		id: id,
		value: todoText
	}
	todoList.push(todoObject);
}


/*
var deleteListItem = function() {
	
}
*/
/*
inputField.addEventListener('click', function() {
	inputField.value = "";
});
*/


var refreshList = function() {
	uList.innerHTML = "";
	var listItem;
	for (var i = 0; i<todoList.length; i++) {
		listItem = document.createElement('li');
		listItem.innerHTML = todoList[i].value;
		listItem.id = i;
		var listItemCheckbox = document.createElement('input');
		listItemCheckbox.type = 'checkbox';
		listItemCheckbox.className = 'checkbox';
		listItemCheckbox.id = 'cBox' + i;
		uList.appendChild(listItem);
		listItem.appendChild(listItemCheckbox);
		listItemCheckbox.addEventListener('click', function(){
		todoList.splice(document.getElementById(listItemCheckbox.id).parentNode.id,1);
		refreshList();
		});
		
		
	};
}

/*
testButton.addEventListener('click', function(a, b){
		console.log(document.getElementById(checkboxId()));
		
});
*/

addButton.addEventListener('click', function(e){
	var todoText = inputField.value;
	addTodo(todoText);
	inputField.value = "";
});



/*
var cBoxChecker = function () {
	for (i=0; i<todoList.length; i++) {
	return todoList.checked;
	return document.getElementsByName('cBox' + i).checked;
	};
};
*/

/*
testButton.addEventListener('click', function(e) {
	alert(cBoxCheck());
});
*/