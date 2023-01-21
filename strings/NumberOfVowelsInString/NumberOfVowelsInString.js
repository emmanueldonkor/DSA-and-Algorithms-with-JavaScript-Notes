function countVowels(str) {
  let vowels = "aeiouAEIOU";
  let count = 0;
  for (let char of str) {
    if (vowels.indexOf(char) !== -1) {
      count++;
    }
  }
  return count;
}
console.log(countVowels("hello")); // should return 2
console.log(countVowels("aeiou")); // should return 5
