// 24) --- *** --- SELECTORS FOR SINGLE ELEMENTS  --- *** ---

// ------ DOCUMENT.getElementById - Old school? ------

// // console.log(document.getElementById('task-title'));          //<h5 id="task-title">Tasks</h5>

// // Get things from the element
// // console.log(document.getElementById('task-title').id);       //task-title
// // console.log(document.getElementById('task-title').className);//h5#task-title


// const taskTitle = document.getElementById('task-title');

// // Change styling - instead of using css, but same prinsiples
// taskTitle.style.background = '#333';
// taskTitle.style.color = '#fff';
// taskTitle.style.padding = '5px';
// // taskTitle.style.display = 'none';    //hides the entire element

// // // Change content
// taskTitle.textContent = 'Task List';
// taskTitle.innerText = 'My Tasks';
// taskTitle.innerHTML = '<span style="color:red">Task List</span>';   //inserts new html line


// ------ DOCUMENT.QUERYSELECTOR - MORE MODERN? ------
console.log(document.querySelector('#task-title')); //<h5 id="task-title">Tasks</h5>
console.log(document.querySelector('.card-title')); //<span class="card-title">Task List</span>
console.log(document.querySelector('h5'));          //<h5 id="task-title">Tasks</h5>

document.querySelector('li').style.color = 'red';                           //1st list item text turns red
document.querySelector('ul li').style.color = 'blue';                       //1st list item text turns blue

document.querySelector('li:last-child').style.color = 'red';                //last list  item text turns red
document.querySelector('li:nth-child(3)').style.color = 'yellow';           //3rd list  item text turns red
document.querySelector('li:nth-child(4)').textContent = 'Hello World';      //4th list item changes content
document.querySelector('li:nth-child(odd)').style.background = '#fcc';      //1st odd list item pink background
document.querySelector('li:nth-child(even)').style.background = '#f4f4f4';  //1st even list item grey background


