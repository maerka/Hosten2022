// 28) --- *** --- REMOVING & REPLACING ELEMENTS  --- *** ---

// ----- REPLACE ELEMENT -----

// Create Element
const newHeading = document.createElement('h2');
// Add id
newHeading.id = 'task-title';
// New text node
newHeading.appendChild(document.createTextNode('Task List'));

// Get the old heading
const oldHeading = document.getElementById('task-title');
//Parent
const cardAction = document.querySelector('.card-action');

// Replace
cardAction.replaceChild(newHeading, oldHeading);



// ----- REMOVE ELEMENT -----
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

// Remove list item
lis[0].remove();

// Remove child element
list.removeChild(lis[3]);



// ----- CLASSES & ATTR -----
const firstLi = document.querySelector('li:first-child');   //<a href="#" class="delete-item secondary-content">…</a>
const link = firstLi.children[0];   

let val;

// Classes
val = link.className;        //delete-item secondary-content
val = link.classList;        //DOMTokenList(2)['delete-item', 'secondary-content', value: 'delete-item secondary-content']
val = link.classList[0];     //delete-item
link.classList.add('test');
link.classList.remove('test');
val = link;

// Attributes
val = link.getAttribute('href');
val = link.setAttribute('href', 'http://google.com');
link.setAttribute('title', 'Google');
val = link.hasAttribute('title');   //true
link.removeAttribute('title');
val = link;

console.log(val);

