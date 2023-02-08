// 25) --- *** --- SELECTORS FOR MULTIPLE ELEMENTS  --- *** ---

// ------ DOCUMENT.getElementsByClassName ------

// const items = document.getElementsByClassName('collection-item');   //[li.collection-item,..., li.collection-item]
// console.log(items);
// console.log(items[0]);           // <li class="collection-item">…</li>
// items[0].style.color = 'red';    // 1st item of classname "collection-item".Can be OUTSIDE ul       
// items[3].textContent = 'Hello';  // 4th item of classname "collection-item" changes content


const listItems = document.querySelector('ul').getElementsByClassName('collection-item');   //array from elements with classname "collection-item" that is INSIDE ul. 
listItems[0].style.color = 'blue';    // 1st item of classname "collection-item" that is INSIDE ul.

console.log(listItems);          //[li.collection-item,..., li.collection-item]


// ------ DOCUMENT.getElementsByTagName ------
let lis = document.getElementsByTagName('li');
console.log(lis);
console.log(lis[0]);
lis[0].style.color = 'red';
lis[3].textContent = '654';




// ------ Convert HTML Collection into array ------
lis = Array.from(lis);

lis.reverse();

lis.forEach(function(li, index){
  console.log(li.className);
  li.textContent = `${index}: Hello`;
});

console.log(lis);




// ------ DOCUMENT.querySelectorAll ------
const items = document.querySelectorAll('ul.collection li.collection-item');

items.forEach(function(item, index){
    item.textContent = `${index}: Hello`;
});

const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(function(li, index){
  li.style.background = '#ccc';
});

for(let i = 0; i < liEven.length; i++){
  liEven[i].style.background = '#f4f4f4';
}

// console.log(items);


// ------ BUILD MY MOVIE TOP 5 LIST ------
top5 = [
    'Lord of the Rings',
    'Interstellar',
    '12 Angry men',
    'Up',
    'Once upon a time in the West'
]


//Access test-item and hide it
document.getElementsByClassName('collection-item')[0].style.display = 'none'
// Alternative method
    // const testText = document.getElementsByClassName('collection-item');
    // testText[0].style.display = 'none'; // Remove the test element


items.forEach(function(item, index){
    item.textContent = `${index+1}: ${top5[index]}`;//Content
    item.style.color = '#2c4c6c';                   // Text-color
    if (index%2==0){                                // Backgrodund for even and odd items
        item.style.background = '#C1D4E6';
    } else{
        item.style.background = '#7AB7F5';
    }  
});

