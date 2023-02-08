// 33) --- *** --- LOCAL % SESSION STORAGE  --- *** ---
// session storage is deleted when browser is closed


// // set local storage item
// localStorage.setItem('name', 'John');
// localStorage.setItem('age', '30');

// // set session storage item
// sessionStorage.setItem('name', 'Beth');

// // remove from storage
// localStorage.removeItem('name');

// // get from storage
// const name = localStorage.getItem('name');
// const age = localStorage.getItem('age');
// console.log(name,' is ',age, ' years old');

// // clear local storage
localStorage.clear();

document.querySelector('form').addEventListener('submit', function(e){
  const task = document.getElementById('task').value; //Input from form

  let tasks;

  if(localStorage.getItem('tasks') === null) {  //build empty array if tasks is "null"
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));  //Else retreive exsisting task from storage. List is stored as 1 long string [a,b,c,...]. JSON parse converts the [, , ,] to arrays
  }

  tasks.push(task); //Add a new task as first element in array

  localStorage.setItem('tasks', JSON.stringify(tasks)); //List must be converted from [] to string

  // alert('Task saved');
  // console.log(task);
  e.preventDefault();
});

// Prints all items stored when program re-launches
const tasks = JSON.parse(localStorage.getItem('tasks'));

tasks.forEach(function(task){
  console.log(task);
});