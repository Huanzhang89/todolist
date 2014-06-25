var inputField = document.getElementById('todoText');
var todoList = [];
var uList = document.getElementById('TodoTable');
var addButton = document.getElementById('addTodo');
var uListChild = document.getElementById('TodoTable').childNodes;
var testButton = document.getElementById('testBtn');
var todoObject = function (id, value) {
	this.id = id;
	this.value = value;
};
var todoListUid = [];



var addTodo = function (todoText) {
	addToArray(todoText);
	refreshList();
};




var addToArray = function(todoText) {
//use object constructor to create a new object evertime the button is clicked
	if (todoList.length === 0) {
		var todoObject1 = new todoObject (1, todoText);
		todoList.push(todoObject1);
		todoListUid = [todoObject1.id];
		console.log(todoObject1.id);
	} else {
		var todoListLength = todoList.length + 1;
		//for loop or if statement to create new todoObject and push it to the array
		var todoObject2 = new todoObject (todoList.length+1, todoText);
		todoList.push(todoObject2);
		todoListUid.push(todoObject2.id);
		console.log(todoList);
	};
};


/*
var deleteListItem = function() {
	
}
*/
/*
inputField.addEventListener('click', function() {
	inputField.value = "";
});
*/
var deleteItem = function (listItemId) {
	todoList.splice(document.getElementById(listItemId).parentNode.id,1);
};

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
		deleteItem(listItemCheckbox.id);
		refreshList();
		});
		
		
	};
};

var insertPositionArrows = function () {
	//loops through the array and add arrows
	for (var i=0; i<todoList.length; i++) {
		
	}
}

addButton.addEventListener('click', function(e){
	var todoText = inputField.value;
	addTodo(todoText);
	inputField.value = "";
});
