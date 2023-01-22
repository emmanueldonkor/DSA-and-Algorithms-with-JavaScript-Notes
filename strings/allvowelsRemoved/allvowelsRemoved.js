function removeVowels(str) {
  let vowels = ["a", "e", "i", "o", "u"];
  let result = "";
  //If it contains a vowel remove it
  for (let char of str) {
    if (!vowels.includes(char)) {
      result += char;
    }
  }
  return result;
}
//space complexity O(n)
//Time Complexity O(n)