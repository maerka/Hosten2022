// 20) --- *** --- LOOK AT THE WINDOW OBJECT  --- *** ---
// 21) --- *** --- BLOCK SCOPE WITH LET AND CONST  --- *** ---

// 20) --- *** --- LOOK AT THE WINDOW OBJECT  --- *** ---

// WINDOW METHODS / OBJECTS / PROPERTIES
console.log(123);
window.console.log(123);    //console is child of window

// // Alert
// window.alert('Hello world');

// // Promt
// const myinput = prompt();
// alert(myInput);

// // Confirm
// if(confirm('Are you sure?')){
//     console.log('YES');
// } else{
//     console.log('NO');
// }

let val;

// Outter height and width
width = window.outerWidth;
height = window.outerHeight;

// Inner height and width
width = window.innerWidth;
height = window.innerHeight;

console.log(width, height);

// Scroll point
val = window.scrollY;

// Location Object
val = window.location;
val = window.location.hostname; //127.0.0.1
val = window.location.port;     //5500
val = window.location.search;   
val = window.location.href;     //http://127.0.0.1:5500/index.html



// // Redirect
// window.location.href = 'http://google.com'  //google.com is loaded
// // Reload
// window.location.reload();



// History object
// window.history.go(-3);
// val = window.history.length;

// Navigator Object
val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.platform;
val = window.navigator.vendor;
val = window.navigator.language;

console.log(val);




// 21) --- *** --- BLOCK SCOPE WITH LET AND CONST  --- *** ---

// let and const are not constant inside a block, only outside
// vars can always be changed, regardless of scopes - do not use!
var a = 1;
let b = 2;
const c = 3;
console.log('Global Scope: ', a, b, c); //1 2 3

function test(){
    var a = 4;
    let b = 5;
    const c = 6;
    console.log('Function scope: ', a,b,c); //4 5 6
}
test();

if(true){
    // Block Scope
    var a = 7;
    let b = 8;
    const c = 9;
    console.log('Inside Block/If scope: ', a,b,c);  //7 8 9
}
console.log('Global scope: ', a,b,c);     //7 2 3

console.log('Start of let-loop')
for(let a=0; a<10;a++){
    // console.log(`Loop ${a}`);
}
console.log('Global scope: ', a,b,c);     //7 2 3

console.log('Start of var-loop')
for(var a=0; a<10;a++){
    // console.log(`Loop ${a}`);
}
console.log('Global scope: ', a,b,c);     //10 2 3