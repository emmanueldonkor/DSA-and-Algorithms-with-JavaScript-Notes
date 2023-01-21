function longestNonRepeatingChar(str) {
  let charMap = {};
  let maxLength = 0;
  let longestChar = '';

  for (let char of str) {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }

  for (let char in charMap) {
    if (charMap[char] === 1 && char.length > maxLength) {
      maxLength = char.length;
      longestChar = char;
    }
  }

  return longestChar;
}

console.log(longestNonRepeatingChar("abcabcbb")); // should return 'a'
console.log(longestNonRepeatingChar("bbbbbbbb")); // should return ''
