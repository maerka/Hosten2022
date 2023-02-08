// 23) --- *** --- THE DOCUMENT OBJECT  --- *** ---

let val;

val = document;
val = document.all;         //[html, head, meta, meta, meta, link...]
val = document.all[2];      //meta
val = document.all.length;  //43
val = document.head;        //<head>...</head>
val = document.body;        //<body>...</body>
val = document.doctype;     //<!DOCTYPE html>
val = document.domain;      //127.0.0.1
val = document.URL;         //http://127.0.0.1:5500/index_section3_DOM.html
val = document.characterSet;//UTF-8
val = document.contentType; //text/html

val = document.forms;         //HTMLCollection [form#task-form, task-form: form#task-form]
val = document.forms[0];      //form#task-form
val = document.forms[0].id;   //task-form
val = document.forms[0].method;//get
val = document.forms[0].action;//

val = document.links;                 //HTMLCollection(6) [a.delete-item.secondary-content, a.delete-item.secondary-content...]
val = document.links[0];              //a.delete-item.secondary-content
val = document.links[0].id;           //
val = document.links[0].className;    //delete-item secondary-content
val = document.links[0].classList[0]; //delete-item

val = document.images;                      //HTMLCollection []

val = document.scripts;                     //HTMLCollection(3) [script, script, script]
val = document.scripts[2].getAttribute('src');  //DOM1.js

//access scripts in html
let scripts = document.scripts;             //HTMLCollection(3) [script, script, script] - this is an object
let scriptsArr = Array.from(scripts);       //
scriptsArr.forEach(function(script) {       //
  console.log(script.getAttribute('src'));
  // https://code.jquery.com/jquery-3.2.1.js
  // https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/js/materialize.min.js
  // DOM1.js
});
// scripts is an object containing all scripts. 
// scriptsArr turn the object into an array
// loop through that array and print either the script-tag {...log(script)} or the source {...log(script.getAtt...)}


// console.log(typeof scripts);