// 18) --- *** --- Function Declarations & Expressions  --- *** ---
// 19) --- *** --- GENERAL LOOPS  --- *** ---


// 18) --- *** --- Function Declarations & Expressions  --- *** ---

function greet_es5(firstName, lastName){
    if(typeof firstName === 'undefined'){firstName = 'Albus'}   //if missing parameter_es5
    if(typeof lastName === 'undefined'){lastName = 'Dubledore'}
    return 'Hello ' + firstName + ' ' + lastName;
}

function greet_es6(firstName = 'Ron', lastName = 'Weasley'){    //if missing parameter_es6
    return 'Hello ' + firstName + ' ' + lastName;
}

console.log(greet_es5('John', 'Doe'));  //Hello John Doe
console.log(greet_es5());               //Hello Albus Dubledore
console.log(greet_es6('John', 'Doe'));  //Hello John Doe
console.log(greet_es6());               //Hello Ron Weasley

// Function expression
const square = function(x=3){
    return x*x;
};

console.log(square(8));  //64
console.log(square());   //9



// IMMIDIATLEY INVOKABLE FUNCTION EXPRESSIONS - IIFEs
(function(){
    console.log('IIFE RAN..');
})();

const hello2 = "Hello world";
(function () {
    console.log(hello2);
})();


// PROPERTY METHODS
const todo= {
    add:function(){
        console.log('Add todo..');
    },
    edit: function(id){
        console.log(`Edit todo ${id}`)
    }
}

todo.delete = function(){
    console.log('Delete todo..');
}

todo.add();
todo.edit(22);
todo.delete();


// 19) --- *** --- GENERAL LOOPS  --- *** ---

//For-loop
for(let i=0; i<10;i++){
    if(i==2){
        console.log('2 it is');
        continue;   //stops the code for this iteration. "Number 2" is not printed
    }
    if(i==5){console.log('Stop the loop');  break;}
    console.log('for-number '+ i);
}

// while-loop
let i = 0;
while(i<10){
    console.log('while-number' + i);
    i++;
}

i = 0;      //code runs 10 times
i = 100;    //code runs 1 even though condition is not met
do{
    console.log('Do-number '+i);
    i++;
}
while(i<10);

// Arrays and iterations
const cars = ['Ford', 'Checy', 'Honda', 'Toyota'];

//method 1
console.log('Method 1');
for (let i =0; i<cars.length; i++){
    console.log(i, cars[i]);
}

//method 2
console.log('Method 2');
for (let i in cars){
    console.log(i, cars[i])
}

//method 3 - foreach
console.log('Method 3');
cars.forEach(function(car){
    console.log(car);
});

//method 4 - foreach with index
console.log('Method 4');
cars.forEach(function(car, index, array){
    console.log(`${index}: ${car}`);    //`index : value`
    console.log(array);                 // the whole array
});


//Map
const users = [
    {id:1, name:'John'},
    {id:2, name:'Sara'},
    {id:3, name:'Karen'},
    {id:3, name:'Steve'}
];

const ids = users.map(function(user){
    return user.id
    //return [user.id, user.name];
});
console.log(ids);


const user ={
    firstName: 'John',
    lastName: 'Doe',
    age: 40
}

for (let x in user){
    console.log(x); //firstName lastName age
    console.log(`${x}, ${user[x]}`) //`key, value`
}


