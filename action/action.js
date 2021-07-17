
//check if content on our webpage is loaded
document.addEventListener("DOMContentLoaded", getTodos);

let arrayOfDeleteButtons;
// adding event listeners to all the esisting delete buttons
arrayOfDeleteButtons = document.querySelectorAll(".delete-btn");
for (let i of arrayOfDeleteButtons) {
    i.addEventListener("click", function (e){
        e.currentTarget.parentNode.remove();
    }, false);
}
//appending task elements
document.getElementById("add-task-button").addEventListener("click", function() {
     if(document.getElementById("input-task").value != "") {
        //creating a list element
        let node = document.createElement("li");

        //taking string input from input bar
        let taskString = document.getElementById("input-task").value;

        //add task to local storage
         saveLocalTodos(taskString);
        //creating checkbox
        let checkboxnode = document.createElement('input');
        checkboxnode.type = "checkbox";

        //creating text node from the task string
         let textnode = document.createTextNode(taskString);
        //creating spannode
        let spannode = document.createElement("span");
        spannode.className = "task";
        spannode.appendChild(textnode);

        //creating button node
        let buttonnode = document.createElement("button");
        buttonnode.type = "button";
        buttonnode.className = "delete-btn";
        buttonnode.innerText = "X";
        //adding event listeners to all delete buttons
        buttonnode.addEventListener("click", function (e) {
            removeLocalTodos(taskString);
           e.currentTarget.parentNode.remove();
        }, false);

        //appending checkbox, spannode and button node to listnode
        node.appendChild(checkboxnode);
        node.appendChild(spannode);
        node.appendChild(buttonnode);

        //appending listnode to task-list node
        document.getElementById("task-list").appendChild(node);

        //clearing input-task field
        document.getElementById("input-task").value = "";
    } else alert("Enter task!");
});

function saveLocalTodos(todo) {
    //checking if we already have things in there
    let todos;
    if(localStorage.getItem("todos") === null) {
        //create empty array if we dont have it
        todos = [];
    } else {
        //get an array of existing ones
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    //push new todo
    todos.push(todo);
    //adding this array to local storage
    //key value pair : todos, array
    localStorage.setItem("todos", JSON.stringify(todos));
}

function getTodos(){
    //checking if we already have things in there
    let todos;
    if(localStorage.getItem("todos") === null) {
        //create empty array if we dont have it
        todos = [];
    } else {
        //get an array of existing ones
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.forEach(function(todo) {
        //creating a list element
        let node = document.createElement("li");

        //taking string input from input bar
        let taskString = todo;

        //creating checkbox
        let checkboxnode1 = document.createElement('input');
        checkboxnode1.type = "checkbox";

        //creating text node from the task string
        let textnode1 = document.createTextNode(taskString);
        //creating spannode
        let spannode1 = document.createElement("span");
        spannode1.className = "task";
        spannode1.appendChild(textnode1);

        //creating button node
        let buttonnode1 = document.createElement("button");
        buttonnode1.type = "button";
        buttonnode1.className = "delete-btn";
        buttonnode1.innerText = "X";
        //adding event listeners to all delete buttons
        buttonnode1.addEventListener("click", function (e) {
            e.currentTarget.parentNode.remove();
        }, false);

        //appending checkbox, spannode and button node to listnode
        node.appendChild(checkboxnode1);
        node.appendChild(spannode1);
        node.appendChild(buttonnode1);

        //appending listnode to task-list node
        document.getElementById("task-list").appendChild(node);
    });
}

function removeLocalTodos(todo) {
    //checking if we already have things in there
    let todos;
    if(localStorage.getItem("todos") === null) {
        //create empty array if we dont have it
        todos = [];
    } else {
        //get an array of existing ones
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.splice(todos.indexOf(todo), 1);
    localStorage.setItem("todos", JSON.stringify(todos));
}

