// --- *** --- REPETITION BY EDITING HTML  --- *** ---

// Remove testElement
const testElement = document.querySelector('.collection-item');
testElement.remove();

// Get form-element
const form_repetition = document.querySelector('form');

// Build and add select-element inside form-element
console.log('At Start:', form_repetition);
const select = document.createElement('select'); 
form_repetition.appendChild(select);
console.log('Added select:',form_repetition);

// Build and add 3 option-elements inside select-element
for (let i=1; i<4;i++){
  let option = document.createElement('option');
  option.value = i;
  option.textContent = i;
  select.appendChild(option);
} 
console.log('Added 3 options:', form_repetition);

// Disable css-file in order to display select-elements
css = document.querySelectorAll('link')[0];
css.setAttribute('href', '');




// 31) --- *** --- KEY INPUTS  --- *** ---

const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');
// const select = document.querySelector('select');

// Clear input
taskInput.value = '';

// form.addEventListener('submit', runEvent);

// Keydown
taskInput.addEventListener('keydown', runEvent);
// Keydown
// taskInput.addEventListener('keyup', runEvent);
// Keypress
// taskInput.addEventListener('keypress', runEvent);
// Focus
// taskInput.addEventListener('focus', runEvent);
// Blur
// taskInput.addEventListener('blur', runEvent);
// Cut
// taskInput.addEventListener('cut', runEvent);
// Paste
// taskInput.addEventListener('paste', runEvent);
// Input
// taskInput.addEventListener('input', runEvent);
// Change
select.addEventListener('change', runEvent);



function runEvent(e){
  console.log(`EVENT TYPE: ${e.type}`);

  console.log(e.target.value);        //Prints value of keyevent

  heading.innerText = e.target.value; //Update heading according to input

  // Get input value
  // console.log(taskInput.value);

  // e.preventDefault();
}