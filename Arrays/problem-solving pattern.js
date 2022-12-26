//Frequency Counter
//1.Write a function called same, which accepts two arrays
//The function should return true if every value in the array has
//its corresponding value squared in the second array
//The frequency of values must be the same

//same[1,2,3], [4,1,9] // true
//same[1,2,3], [1,9]// false
//same[1,2,1], [4,4,1]// false(must be same frequency)

//A  Naive Solution
/*var same = function (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1) {
      return false;
    }
    arr2.splice(correctIndex, 1);
  }
  return true;
  //Big O of (N~2)- time complexity --very bad time complexity
  //Needs some improvement for it  to be atleast O(n)
};

//Refactored Solution
var newSame = function () {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  //Time complexity  - O(n)
}; */

//2.Anagrams:
//Given two strings, write a function to determine if the second string
//is an anagram of the first. An anagram is a word, phrase, or name formed
//by reaarranging the letters of another, sunc as cinema, formed from iceman

//ValidAnagram('', '') //true
//validAnagram('aaz', 'zza')// false;
//validAnagram('anagram', 'nagaram')// false;
//validAnagram('awesome', 'awesom')// false;

/*var anagram = function(string1, string2){
   if(string1.length !== string2.length){
    return false;
   }
   if(string1.split('').sort().join('') === string2.split('').sort().join('')){
    return true;
   }
   else{
    return false;
   }

} */

/* Is anagram
function validAnagram(first, second){
  if(!first  || !second) return false;
  if(first.length !== second.length) return false;

  //create an empty object
  const obj = {};
  for(let i = 0; i < first.length; i++){
    let letter = first[i];
    //If letter exists, increment, otherwise set to 1
    obj[letter] ? obj[letter] += 1 : obj[letter] = 1;
  }
  for(let i = 0; i < second.length; i++){
    let letter = second[i];
    //If Can't find letter or letter is zero then its not an anagram
     if(!obj[letter])return false;
     obj[letter] -= 1;
  }
  return true;
}

console.log(validAnagram("iceman", "cinemk")); */

//Multiple pointers
//3. Write a function called sumZero which accepts
// a sorted array of integers. The function should find the first pair
//where the sum is 0.Return an array that includes both values that
//sum to zero or undefined if a pair does not exist

/* A naive solution
function sumZero1(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.lenghth; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}

console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 5]));
//time complexity O(n * n) || big O of n squared

//Ok solution
function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) right--;
    else left++;
  }
}
//Time complexity O(n)
//space complexity O(1)

function countUniqueValues(arr) {
  if (arr.length === 0) return 0;
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
} */
/*
//finding maximum subarray
function maxSubArray(arr){
  if(num > arr.length)return null;

  let max = -Infinity;
  for(let i = 0; i < arr.length-num+1; i++) {
    temp = 0;
    for(let j =0; j < num; j++){
      temp += arr[ i + j];
    }
    if(temp > max){
      max = temp;
    }

  }
  return max;
    
  
} */

const c = (string) =>{
    //let cam = string.toUpperCase(); 
    let final = "";
    
    for( let s = 0;  s  < string.length; s++ ){
        if( s % 2 === 0)
        final += string[s].toUpperCase();
    else
    final += string[s].toLowerCase();
    }
   return final;
} 

console.log(c("EMMANUEL"));
