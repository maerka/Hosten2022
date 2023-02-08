// 12) --- *** --- Template Literals --- *** ---
// 13) --- *** --- Arrays & Array Methods  --- *** ---
// 14) --- *** --- Object Literals  --- *** ---
// 15) --- *** --- Dates & Times  --- *** ---
// 16) --- *** --- IF STATEMENTS & COMPARISON OPERATORS  --- *** ---
// 17) --- *** --- SWITCHES  --- *** ---

console.clear();
// 12) --- *** --- Template Literals --- *** ---

const name = 'John';
const age = 30;
const job = 'Web developer';
const city = 'Miami';

function hello(){
    return 'hello';
}

// Without template string (es5)
// Method1
html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + ' </li><li>Job: ' + job + ' </li><li>City: ' + city + ' </li></ul>';

// Method2
html = '<ul>' +
        '<li>Name: ' + name + '</li>' +
        '<li>Age: ' + age + '</li>' +
        '<li>Job: ' + job + '</li>' +
        '<li>City: ' + city + '</li>' +
        '</ul>';

// With template string (es6)
// Method3
html = `
<ul>
<li>Name: ${name}</li>
<li>Age: ${age}</li>
<li>Job: ${job}</li>
<li>City: ${city}</li>
<li>${2 + 2}</li>
<li>${hello()}</li>
<li>${age > 30? 'Over 30': '30 or below'}</li>
`
document.body.innerHTML = html;



// 13) --- *** --- Arrays & Array Methods  --- *** ---
// Examples
const numbers =           [43, 56, 33, 23, 44, 36, 5];
const numbers2 = new Array(43, 56, 33, 23, 44, 36, 5);
const numbers3 =          [43, 56, 33, 23, 44, 36, 5];
const fruits = ['apple, banana, orange, pear'];
const mixed = [22, 'hello', true, undefined, null, {a:1, b:3}, new Date()];

let val;
// Get array length
val = numbers.length;
// Check if is array
val = Array.isArray(mixed); // true

// Insert into array
val = numbers[3];  //23
numbers[3] = 100;
val = numbers[3];  //100 

// Find index of value
val = numbers.indexOf(36); //5

//Mutating arrays
numbers.push(250);      //add to end             [43, 56, 33, 100, 44, 36, 5, 250]
numbers.unshift(120);   //add to front      [120, 43, 56, 33, 100, 44, 36, 5, 250]
numbers.pop();          //remove from end   [120, 43, 56, 33, 100, 44, 36, 5]
numbers.shift();        //remove from front      [43, 56, 33, 100, 44, 36, 5]
numbers.splice(1,3);    //remove index 1,2,3     [43,              44, 36, 5]
numbers.reverse();      //reverse                [5, 36, 44, 43]
val = numbers.concat(numbers2);   //Add together [5, 36, 44, 43, 43, 56, 33, 23, 44, 36, 5]

// Sorting
val = fruits.sort();   //sort alphabetic            ['apple, banana, orange, pear']
val = numbers3.sort(); //sorts by first digit       [23, 33, 36, 43, 44, 5, 56]
val = numbers3.sort(function(x,y){ //normal sorting [5, 23, 33, 36, 43, 44, 56]
    return x-y;
})
val = numbers3.sort(function(x,y){ //reverse sorting[56, 44, 43, 36, 33, 23, 5]
    return y-x;
})

// Find number
function under50(num){
    return num < 50;
}
val = numbers3.find(under50);   //44 returns first number under 50 from sorted list


console.log(numbers3);
console.log(val);






// 14) --- *** --- Object Literals  --- *** ---
const person = {
    firstName: 'Albus Percival Wulfric Brian',
    lastName:   'Dumbledore',
    age: 115,
    yearOfDeath:1996,
    email: 'dumbledore@hogwarts.owl',
    hobbies: ['reading', 'knitting'],
    address: {
        city: '12 Grimmauld Place',
        state: 'London',

    },
    getBirthYear: function(){
        return this.yearOfDeath-this.age;
    }

}

val = person;               //{firstName: 'Steve'}
val = person.firstName;     //Albus Percival Wulfric Brian
val = person['lastName'];   //Dumbledore
val = person.age;           //115
val = person.hobbies[1];    //knitting
val = person.email;         //dumbledore@hogwarts.owl
val = person.address.state; //12 Grimmauld Place
val = person.address['city']//London
val = person.getBirthYear() //1881
val = person.getBirthYear   //ƒ (){return this.yearOfDeath-this.age;}    returns the whole function

console.log(val);

// list of objects
const people = [
    {nickname: 'John', age: 30},
    {nickname: 'Mike', age: 23},
    person
]

for (let i=0; i<people.length; i++){
    console.log(people[i]);             //{nickname: 'John', age: 30}
    console.log(people[i].nickname);    //John  crashes for Dumbledore
}




// 15) --- *** --- Dates & Times  --- *** ---

const today = new Date()    //current date: Thu Jan 26 2023 22:35:22 GMT+0100 (Central European Standard Time)
let birthday = new Date('09-21-1994') //Wed Sep 21 1994 00:00:00 GMT+0200 (Central European Summer Time)
birthday = new Date('09-21-1994 11:25:00') //Wed Sep 21 1994 11:25:00 GMT+0200 (Central European Summer Time)
birthday = new Date('9/21/1994')
val = birthday;

val = today.getMonth();     //0
val = today.getDate();      //26
val = today.getDay()        //4
val = today.getFullYear();  //2023
val = today.getHours();     //22
val = today.getMinutes();   //37
val = today.getSeconds();   //28
val = today.getMilliseconds();//824 
val = today.getTime();      //1674769078873     Seconds past since january 1st 1970

val = birthday.setMonth(0); //759106800000 (march)
val = birthday.setDate(12); //758329200000
val = birthday.setFullYear(1970);   //946800000     NB: 1969 gives negative numbers
val = birthday.setHours(3); //957600000
val = birthday.setMinutes(30);      //959400000
val = birthday.setSeconds(25);      //959425000

val = birthday; //Mon Jan 12 1970 03:30:25 GMT+0100 (Central European Standard Time)

console.log(val);



// 16) --- *** --- IF STATEMENTS & COMPARISON OPERATORS  --- *** ---
const id = '100';


// Equal to
if(id == 100){
    console.log('Correct');
}   else{
    console.log('Incorrect');
}

// NOT Equal to
if(id != 101){
    console.log('Correct');
}   else{
    console.log('Incorrect');
}

// Equal to value & type
if(id === 100){     //!== not equal 
    console.log('Correct');
}   else{
    console.log('Incorrect');
}

// Read
if(id){
    console.log('The ID is ${id}'); // The ID is ${id}
    console.log(`The ID is ${id}`); // The ID is 100
}   else{
    console.log('NO ID')
}

// if variable is undefined
if(typeof id !== undefined){
    console.log(`The ID is ${id}`);
}   else{
    console.log('NO ID')
}

// Greater or equal
if(id >=100){
    console.log('Equal or greater than 100');
}   else{
    console.log('Smaller than 100')
}

// if else
if(id >100){
    console.log('Greater than 100');
}   else if(id < 100){
    console.log('Smaller than 100')
}   else{
    console.log('Equal to 100')
}

// COLORS
const color = 'blue';
if(color === 'red'){
    console.log('Color is red');
}   else if(color === 'blue'){
    console.log('Color is blue');
}   else{
    console.log('Color is not red or blue');
}


// LOGICAL OPERATOR
//name = John
//age = 30

// AND &&
if(age > 0 && age <12){
    console.log(`${name} is a child`)
} else if(age >=13 && age <= 19){
    console.log(`${name} is a teenager`)
}  else{
    console.log(`${name} is an adult`)
}

// OR ||
if(age < 16 || age > 65){
    console.log(`${name} can not run in race`)
}else{
    console.log(`${name} is registered for the race`)
}


// TERNARY OPERATORS "short writing"
console.log(id === 100? 'Correct': 'Incorrect') // : means else

// Without braces
if(id === 100)
    console.log('Correct')
else
    console.log('Incorrect')


    
// 17) --- *** --- SWITCHES  --- *** ---
// Used when you have MANY cases

// color = 'blue'
switch(color){
    case 'red':
        console.log('Color is red');
        break;
    case 'blue':
        console.log('Color is blue');
        break;
    default:
        console.log('Color is not red or blue');
        break;
}

switch(new Date().getDay()){
    case 0:
        day = 'Sunday';
        break;
    case 1:
        day = 'Monday';
        break;
    case 2:
        day = 'Tuesday';
        break;
    case 3:
        day = 'Wednesday';
        break;
    case 4:
        day = 'Thursday';
        break;
    case 5:
        day = 'Friday';
        break;
    case 6:
        day = 'Saturday';
        break;
}

console.log(`Today is ${day}`);