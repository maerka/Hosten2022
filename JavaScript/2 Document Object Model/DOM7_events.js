// --- REPETITION FROM DOM6 ---

// Create Element
const newHeading = document.createElement('div');
// Add id
newHeading.class = 'collection-item';
// New text node
newHeading.appendChild(document.createTextNode('Lecture 29) Event Listeners & Event Object'));

// Get the old heading
const oldHeading = document.getElementsByClassName('collection-item')[0];

//Parent
const parent = oldHeading.parentElement;

// Replace
parent.replaceChild(newHeading, oldHeading);




// 29) --- *** --- EVENT LISTENERS & THE EVENT OBJECT  --- *** ---


// document.querySelector('.clear-tasks').addEventListener('click', function(e){
//   console.log('Hello World');
//   e.preventDefault();  // prevents from refresing website
// });

document.querySelector('.clear-tasks').addEventListener('click', onClick);  //looks for an function called onClick

function onClick(e){
  console.log('Clicked');
  e.preventDefault();
  let val;

  val = e;  //Gives information about the moment when clicked e.g. was shift pressed down?

  // Event target element - (info about button clicked)
  val = e.target;             //<a class="clear-tasks btn black" href>Clear Tasks</a>
  val = e.target.id;          //
  val = e.target.className;   //clear-tasks btn black (3 associated classes)
  val = e.target.classList;   //DOMTokenList(3) ['clear-tasks', 'btn', 'black', value: 'clear-tasks btn black']
  e.target.innerText = `Time cleared: ??`;

  // Event type
  val = e.type;

  // Timestamp
  val = e.timeStamp;

  // Coords event relative to the window (kanten på vinduet)
  val = e.clientY;
  val = e.clientX;

  // Coords event relative to the element (kanten på knappen)
  val = e.offsetY;
  val = e.offsetX;

  console.log(val);
}