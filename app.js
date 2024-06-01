// Selecting Dom
const inputText = document.querySelector(".input");
const todoList = document.querySelector(".todo-list");
const todoButton = document.querySelector(".submit-button");
const filterTodo = document.querySelector(".filter-todo");

// Adding Event Listener
document.addEventListener('DOMContentLoaded', getTodos)
todoButton.addEventListener('click' , addTodo);
todoList.addEventListener('click', action);
filterTodo.addEventListener('click', display);

//Functions
function addTodo(e){
  //  stoping the default action of Loading by button
    e.preventDefault();

  //  creating a div to be added to ul todo-list
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

  // creating a list item to be added to div
    const todoItem = document.createElement("li");
    todoItem.classList.add("todo-item");
    todoItem.innerText = inputText.value;
  
    saveLocalTodos(inputText.value);
    inputText.value = "";

    todoDiv.appendChild(todoItem);
    
    const completed = document.createElement("button");
    completed.innerHTML = `<i class="fas fa-check"></i>`;
    completed.classList.add("complete-button");
    
    const trash = document.createElement("button");
    trash.innerHTML = `<i class = "fas fa-trash"></i>`
    trash.classList.add("trash-button");

    todoDiv.appendChild(completed);
    todoDiv.appendChild(trash);

    todoList.appendChild(todoDiv);
    
}

function action(e){
  const item = e.target;

  if (item.classList[0] == "trash-button"){
      const toremove = item.parentElement;
      toremove.classList.add("fall");
      removeLocalTodos(toremove)
      toremove.addEventListener("transitionend", ()=>{
        toremove.remove();
      })
  }
  else if (item.classList[0] = "complete-button"){
    const toCheck = item.parentElement;
    toCheck.classList.toggle("mark");
  }
}

function display(e){
  const todos = todoList.childNodes;
  todos.forEach(function(todo){
      switch(e.target.value){
        case "all":
          todo.style.display = "flex";
          break;
        case "completed":
          if (todo.classList.contains("mark")){
            todo.style.display = "flex";
          }
          else{
            todo.style.display = "none"
          }
          break;
        case "uncompleted":
          if (!todo.classList.contains("mark")){
            todo.style.display = "flex";
          }
          else{
            todo.style.display = "none";
          }
      }
  });
}

function saveLocalTodos(todo){
  let todos;
  if (localStorage.getItem("todos") === null){
    todos = [];
  }
  else{
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos)) ;
}

function removeLocalTodos(todo){
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  const todoIndex = todo.children[0].innerText;
  todos.splice(todos.indexOf(todoIndex), 1);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function getTodos(){
  let todos;
  if (localStorage.getItem("todos") === null){
    todos = [];
  }
  else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  todos.forEach(function(todo){
    //  creating a div to be added to ul todo-list
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

  // creating a list item to be added to div
    const todoItem = document.createElement("li");
    todoItem.classList.add("todo-item");
    todoItem.innerText = todo;

    todoDiv.appendChild(todoItem);
    
    const completed = document.createElement("button");
    completed.innerHTML = `<i class="fas fa-check"></i>`;
    completed.classList.add("complete-button");
    
    const trash = document.createElement("button");
    trash.innerHTML = `<i class = "fas fa-trash"></i>`
    trash.classList.add("trash-button");

    todoDiv.appendChild(completed);
    todoDiv.appendChild(trash);

    todoList.appendChild(todoDiv);
  });
}
