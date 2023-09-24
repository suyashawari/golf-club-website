// variables in js

// var build using   es5
// let and const build using   es6

let a = 10;// it can be update but cant redeclared 
const b = 20;// can not be change after declare and can not update after declare and 

var c = 30;//it can be updated and redeclared in its scope display on browser console not secure 


// advance var function scoped
function varscopedemo() {
    for (var index = 0; index <= 11; index++) {
        console.log(index);
    }
    console.log(index);
}
varscopedemo();

// var add it to window object 
// let doesnot adds it to window object

// *imp****------- window is not part of javascript window contain alert , console, print and all provided by browser 
console.log(window);
// ---------------------------


// hoisting in js
console.log(abhi);//return undeffined means variable declaration moves to top
var abhi = 111;
// -------------------------



// premituves and referance 
//premitive value :::-  agar kisika data / value copy kita to and change kiya to 1 varable bhi change hogaaaaaa vo value promitive hai

// premitive value copy from ar to to br
var ar = [1, 2, 3, 4];
var br = ar;
console.log(br)
br.pop(); //then then the value of a will also be [1,2,3] same as b 
console.log(`br=${br}`)
console.log(`ar= ${ar}`);
// referance :::: if we copy any value referance not main value from the varible then it called as referance variable 

// copy by referance usin spread operator `...`

br = [...ar];
br.push(55555)
console.log(`br=${br}`)
console.log(`ar= ${ar}`);
// -------------------------




// the loops are same as all languages
// advance in array :: forin foreach 
// foreach : use when operations on array
var arrdemo = [1, 2, 3, 4, 5, 6, 6, 7];

arrdemo.forEach(element => {//for each take referance copy (temp copy ) of array 
    console.log(element + 2);

});
console.log(arrdemo);

// forin used for object iteration
var objdemo = {
    name: "one",
    number: 9090909099,
    email: "laskdjf@gmail.com"
};
for (var key in objdemo) {
    console.log(`key=${key} & value=${objdemo[key]}`)
}

// ---------------------
// if else advance true and falsy value
// falsy=false 0 undefined null NaN document.all
if (-1) { console.log("if"); }
else { console.log("else"); }
// -----------------------


// functions in js
function fristfunc() {
    console.log("hello world");
}
fristfunc();


// advance functions callback funcions and frist class funcion
// call back function is the function that is used when we wnat to perform a time taking process like download
setTimeout(()=>console.log("2 second completed"),2000);

// fristclassfuncion :: we can store function  inside the variable EX::::
var fristclassfundemo=function() {console.log("frist class function executed")};
fristclassfundemo();

// EX2::
function demofunction(oneval){
        oneval();
}
demofunction(()=>{console.log("2 example of FristClassFunction it means the parameter passed in demofunction is 'function' and that called by the parameter name like 'oneval'")})
// -------------------------




// parameter and arguments in js
// parameters
function parameterfunction(a, b, c) {

}
// arguments
parameterfunction(1, 2, 3);
// ---------------------------





// arrays and its methods
var arr1 = [1, 2, 3, 4, 5, 6,];
var valstr = arr1.push(8);// it return the position where the value get store
arr1.pop();
console.log(arr1);
console.log(valstr);
arr1.shift();// for delete frist position
arr1.unshift(4555555);
console.log(arr1);

// advance in array typeof
var arrnew=[1,2,3,4,5,6];
console.log(typeof(arrnew));
console.log(arrnew);

// --------------------------


// objects in js
var ao = {
    name: "one",
    number: 9090909099,
    email: "laskdjf@gmail.com"
};//info of the variable hold by the object
ao.name = "asldkfj";
console.log(ao);

// object copy by referance usin spread operator
var bo = { ...ao }
console.log(bo)

// advance how to delete the item from object
delete bo.email;
console.log(bo);
// ---------------------



// stack and heap in js

// heap store the value of the output of the two values ex::- 
var letsadd = 1 + 2 + 3 + 4;
// heapmemory=1+2=3 then 3 store in heap  then 3+4=7  letsadd=7
// -------------------------------------


// execution context

// when function get called then it make its imaginarry container which contain 3 things that called as execution context
// 3 things=
// 1 variables
// function inside parent function
// lexical environment of that function : like it contain info of the accessible variables and function or scope of function
function def() {
    let a = 12;//this is accessible
    function def2() {//this is accessible 
        let b = 21;// lexical tell that these can not be accessible
    }
}