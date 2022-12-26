/*//understanding const and let;

let movie = "Lord of the Rings";
//var movie = "Batman vs Superman"; //error movie already decloared

function starWarsFan(){
    const movie = "star wars";
    return movie;
}

function marvelFan(){
    movie = "The avengers";
    return movie;
}

function blizzardFan(){
    const isFan = true;
    let phrase = "Warcraft";
    console.log("Inside if " + phrase );
    if(isFan){
        let phrase = "Initial text";
        phrase = "For the Horde!";
        console.log("Inside of " + phrase);
    }

    phrase = "For the Alliance!";
    console.log("After if: " + phrase);
}
console.log(movie);
console.log(starWarsFan());
console.log(marvelFan());
console.log(movie);
blizzardFan();


//Arrow functions
const circleArea = r =>{
    const PI = 3.14;
    const area = PI * r  * r;
    return area;
}
console.log(circleArea(2));


const circleAre = r => 3.14 * r  * r; 

const cir = () =>{
   console.log("Hello World!"); 
}
cir(); */

/*Default parameter values for functions
function sum(x = 1, y = 2, z = 3){
    return x + y + z;
}
let params = [3,4,5];
console.log(sum(...params));
console.log(sum.apply(undefined, params));

//Rest function
function resparameterFunction(x, y, ...a){
    return (x + y) * a.length;
}

console.log(resparameterFunction(1,2, "hello", true, "you"));

//modifying the code
function rest(x, y){
    var a = Array.prototype.slice.call(arguments, 2);
    return (x + y) * a.length;
}
console.log(rest(1,2, "hello", true, 7)); */

//Enhanced object properties: array destructuring

//let[x, y] = ["a", "b"];
//It can also use to swap values
//[x,y] = [y, x];

//property shorthand
//let[a ,b] = ["a", "b"];
//let obj = {x, y};
//console.log(obj);

//shorthand method names
/*

var hello = {
    nam: "abcdef",
    printHello: function(){
        console.log("Hello");
    }
}
console.log(hello.printHello());

class Person{
    constructor(name){
        this._name  = name;
    }
    get name(){
        return this._name;
    }
    set name(value){
        this._name = value;
    }
}

let lotrChar = new Person("Frodo");
console.log(lotrChar.name);
lotrChar.name = "Nico";
console.log(lotrChar.name); */

/*let dayOfWeek = new Array();
dayOfWeek = new Array(7);
dayOfWeek = new Array("sunday", "Monday", "Tuesday", "Wednesday", "Thursday","Friday");

let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday","Thursday", "Friday"];
console.log(daysOfWeek.length); */

//Accessing elements and iteraring an array
/*const fibonacci = [];
fibonacci[1] = 1;
fibonacci[2] = 1;
for(let i = 3; i < 20; i++){
    fibonacci[i] = fibonacci[i -1] + fibonacci[i -2];
}

for(let i = 1; i< fibonacci.length; i++){
    console.log(fibonacci[i]);
} */

//Inserting an element at the end of the array
/*let numbers = [0, 1,2,3,4,5,6,7,8,9];
//if we want to insert and element at the end of the array
numbers[numbers.length] = 10;
console.log(numbers);

//using the push method
numbers.push(11);
numbers.push(12, 13);
console.log(numbers); */

//Big O
/*function addUpTo(n){
    return n * (n + 1)/ 2;
}
let time = performance.now();
addUpTo(10000000000);
let time2 = performance.now();
console.log(`Time Elapsed: ${time - time2 / 1000}s`); 

function add(n){
    let total = 0;
    for(let i = 1; i <=n; i++){
        total += i;
    }
    return total;
}
let t1 = performance.now();
add(10000000000);
let t2 = performance.now();
console.log(`Time Elapsed: ${t1-t2/1000}s`); 
    */
   /*
   function logAtleast5(n){
    for(let i = 1; i <= Math.max(5, n); i++){
        console.log(i);
    }
   }

   logAtleast5(4);
*/

/*function charCount(str){
    let obj = {};
    for(let char of str){
         char = char.tolowerCase();
        if(/[a-z0-9]/.test(char)){
           obj[char] = ++obj[char] || 1;
        }
    }
    return obj;
} */
/*
function charCount(str) {
  let obj = {};
  for (let char of str) {
    char = char.tolowerCase();
    if (isAlphaNumeric(char)) {
      obj[char] = ++obj[char] || 1;
    }
  }
  return obj;
}


function isAlphaNumeric(char){
    let code = char.charCodeAt(0) 
    if( !(code > 47 && code < 58)&&  // numeric (0-9)
    !(code > 64 && code < 91) &&  // upper alpha (A-Z)
    !(code > 96 && code < 123)){ // Lower Alpha (a-z)
      return false;
    }
  return true;
} */

function nextGreaterElement(nums1, nums2) {
  // Create an object to store the indices of the elements in nums2
  const indexMap = {};
  for (let i = 0; i < nums2.length; i++) {
    indexMap[nums2[i]] = i;
  }
  console.log(indexMap); // print the index map to the console

  // Create an array to store the result
  const result = [];
  // Iterate through nums1
  for (const num of nums1) {
    // Find the index of the current element in nums2
    const index = indexMap[num];
    console.log(`Index of ${num}: ${index}`); // print the index to the console
    // Iterate through the rest of nums2 starting from the index of the current element
    for (let i = index + 1; i < nums2.length; i++) {
      // If a greater element is found, add it to the result array and break out of the loop
      if (nums2[i] > num) {
        result.push(nums2[i]);
        console.log(`Next greater element for ${num}: ${nums2[i]}`); // print the next greater element to the console
        break;
      }
    }
    // If no next greater element was found, add -1 to the result array
    if (result.length < nums1.length) {
      result.push(-1);
      console.log(`Next greater element for ${num}: -1`); // print -1 to the console
    }
  }

  // Return the result array
  return result;
}

nextGreaterElement([4,1,2], [1,3,4,2]);
