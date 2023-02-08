// 27) --- *** --- CREATING ELEMENTS  --- *** ---

// ----- Create element -----
const li  = document.createElement('li');

// Add class
li.className = 'collection-item';

// Add id
li.id = 'new-item';

// Add attribute
li.setAttribute('title', 'New Item');  //Sets title to New Item

// Create text node and append
li.appendChild(document.createTextNode('Hello World'));



// ----- Create new link element (The x) -----
const link = document.createElement('a');
// Add classes
link.className = 'delete-item secondary-content';
// Add icon html
link.innerHTML = '<i class="fa fa-remove"></i>';

// Append link into li
li.appendChild(link);



// ----- Append li as child to ul -----
document.querySelector('ul.collection').appendChild(li);

console.log(li);

{/* <li class="collection-item" id="new-item" title="New Item">…</li> */}