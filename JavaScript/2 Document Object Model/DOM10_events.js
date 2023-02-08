// 32) --- *** --- EVENT BUBBLING & DELEGATION  --- *** ---

// EVENT BUBBLING - examples of how one or many elements can be clicked. "3 in 1"

// document.querySelector('.card-title').addEventListener('click', function(){
//   console.log('card title');
// });

// document.querySelector('.card-content').addEventListener('click', function(){
//   console.log('card content');
// });

// document.querySelector('.card').addEventListener('click', function(){
//   console.log('card');
// });

// document.querySelector('.col').addEventListener('click', function(){
//   console.log('col');
// });

// EVENT DELGATION - Same prinsiple, but going down into structure

const delItem = document.querySelector('.delete-item'); //The yellow X

delItem.addEventListener('click', deleteItem);          //When clicking on the X, call function  deleteItem

document.body.addEventListener('click', deleteItem);    //The entire webpage (body)

function deleteItem(e){
  console.log(e.target);

  // // Method 1 - not good since it is very sensitive to class names
  // if(e.target.parentElement.className === 'delete-item secondary-content'){
  //   console.log('delete item');
  // }

  // Method 2 - better since it checks if element contains that class
  if(e.target.parentElement.classList.contains('delete-item')){
    console.log('delete item');
    e.target.parentElement.parentElement.remove();  //deletes the entire list-element, not only the X
  }
}