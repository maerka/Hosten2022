// 5-7) --- *** ----- GETTING STARTED ----- *** -----
// 8) ----- *** ----- DATA TYPES ----- *** -----
// 9) ----- *** ----- TYPE CONVERSION ----- *** -----
// 10) ---- *** ----- Numbers & the Math Obect ----- *** -----
// 11) ---- *** ----- String Methods & Concatnation --- *** ---

// USE OF CONSOLE.COG

console.log('123');
console.log([1,2,3,4]);
console.log({a:1, b:2}) //object
console.table({a:1,b:2}) //tabell på norsk

// Warning and error
console.error('This is som error');
console.clear();
console.warn('This is a warning');

// Time
console.time('Hello')
    console.log('Hello world');
    console.log('Hello world');
    console.log('Hello world');
    console.log('Hello world');
    console.log('Hello world');
    console.log('Hello world');
    console.log('Hello world');
console.timeEnd('Hello');

// 8) ----- *** ----- DATA TYPES ----- *** -----
console.clear();
// String
const name = 'John Doe';
// Number
const age1 = 45;
// Boolearn
const hasKids = true;
// Undefined
let test;
// Symbol
const sym = Symbol();

//  REFERENCE TYPES - Objects
// Array
const hobbies = ['movie', 'music'];
// Object literal
const address = {
    city: 'Boston',
    state: 'MA'
}

const today = new Date();
console.log(today);
console.log(typeof today);

// 9) ----- *** ----- TYPE CONVERSION ----- *** -----

let val;
// Number to string
val = 555;
val= String(555); //convert
// Bool to string
val = String(true);
// Date to string
val = String(new Date()); //Thu Jan 26 2023 18..._string_66
// Array to string
val = String([1,2,3,4]); //_string_7

// .toString()
val = (5).toString();   //_string_1
val = (true).toString();//_string_4

// String to number
val = '5.2';
val = Number(val);          //0_number_undeined
val = Number(true);         //1_number_undefined
val = Number(false);        //0_number_undefined
val = Number(null);         //0_number_undefined
val = Number('hello');      //NaN_number_undefined
val = Number([1,2,3]);      //NaN_number_undefined

val = parseInt('100.30');   //100_number_undefined
val = parseFloat('100.30'); //100.3_number_undefined
val = val.toFixed(2);        //100.30_string_6

//output
console.log(val);
console.log(typeof val);
console.log(val.length);


// Adding string+number
const val1 = String(5);
const val2 = 6;
const sum1 = val1+val2;  //converts val2 to a string

console.log(sum1);           //56
console.log(typeof sum1);    //string 
console.log(sum1.length);    //2

const sum2 = val1*val2;  //converts val1 to a number
console.log(sum2);           //30
console.log(typeof sum2);    //number 
console.log(sum2.length);    //undefined


// 10) ----- *** ----- Numbers & the Math Obect ----- *** -----
// Math objects
val = Math.PI;
val = Math.E;   //2.718281828459045
val = Math.round(val)   //3
val = Math.ceil(2.4)    //2
val = Math.floor(2.8)   //2
val = Math.sqrt(64)     //8
val = Math.abs(-3);     //3 
val = Math.pow(8,2)     //64
val = Math.min(2,33,4,1,55,6,3,-2); //-2
val = Math.random(); //0.25877651790516154 or 0.051412534620219885
val = Math.random() * 20+1;   //between 1 and 20 such as 17.872949463511574
val = Math.floor(Math.random() * 20+1);   //whole number between 1 and 20 such as 6

console.log(val);


// 11) --- *** --- String Methods & Concatnation --- *** ---

const firstName = 'William';
const lastName = 'Johnson';
const age = 36;
const str = 'Hello there my name is Brad';
const tags = 'web design, web development, programming';

//Concatenation
val = firstName+lastName;
val = firstName + ' ' + lastName;     //William Johnson
val = firstName.concat(' ', lastName);//William Johnson

// Append
val = 'Brad ';
val += 'Traversy'; //Brad Traversy
val = 'Hello, my name is '+firstName+ ' and I am ' + age; // Hello, my name is William and I am 36

// Escaping
val = 'That\'s awesome!'; //Handling the '
val = "That's awesome!";  //Handling the '

// Length
val = firstName.length;

// Change case
val = firstName.toUpperCase(); //WILLIAM
val = firstName.toLowerCase(); //william

// Index of letters
val = firstName.indexOf('l');    //2 (first index)
val = firstName.indexOf('4');    //-1 (error)
val = firstName.lastIndexOf('l');//3 (error)

val = firstName[5];              //a
val = firstName[-1];             //undefined
val = firstName.charAt('5');     //a
val = firstName.charAt(firstName.length-1); //m

// substring()
val = firstName.substring(2,6); //llia
// slice()
val = firstName.slice(2,6);     //llia
val = firstName.slice(-3) ;     //iam last 3 letters

// split()
val = str.split(' '); //space seperated (6) ['Hello', 'there', 'my', 'name', 'is', 'Brad']
val = tags.split(','); //['web design', ' web development', ' programming']

// replace()
val = str.replace('Brad', 'Jack'); // Jack insted of Brad --> Hello there my name is Jack

// includes()
val = str.includes('foo'); //false
val = str.includes('name'); //true


console.log(val)

