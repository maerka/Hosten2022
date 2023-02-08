// 26) --- *** --- TRAVERSING THE DOM  --- *** ---

let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = listItem;     //<li class="collection-item">…</li>
val = list;         //ul.collection

// Get child nodes - returns node list like attributes, elements etc.
val = list.childNodes;              //[text, li.collection-item, text, ...., text, li.collection-item, text]
val = list.childNodes[0];           //#text
val = list.childNodes[0].nodeName;  //#text
val = list.childNodes[1].nodeType;  //1
    // 1 - Element
    // 2 - Attribute (deprecated)
    // 3 - Text node
    // 8 - Comment
    // 9 - Document itself
    // 10 - Doctype


// Get children element nodes - returns html collection
val = list.children;        //[li.collection-item, li.collection-item,..., li.collection-item]
val = list.children.length; // 5
val = list.children[1];     //<li class="collection-item">…</li>
list.children[1].textContent = 'Hello';

// Children of children
list.children[3].children[0].id = 'test-link';
val = list.children[3].children[0];

// First child
val = list.firstChild;
val = list.firstElementChild;

// Last child
val = list.lastChild;
val = list.lastElementChild;

// Count child elements
val = list.childElementCount;   //5

// Get parent node
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

// Get next sibling
val = listItem.nextSibling;
val = listItem.nextElementSibling.nextElementSibling.previousElementSibling;

// Get prev sibling
val = listItem.previousSibling;
val = listItem.previousElementSibling;



console.log(val);