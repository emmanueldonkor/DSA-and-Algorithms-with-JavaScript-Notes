
function longestSubstringWithoutRepeatingChars(str) {
  let longest = 0; // stores the length of the longest substring
  let start = 0; // keeps track of the start index of the current substring
  let seen = {}; // keeps track of characters already seen

  for (let end = 0; end < str.length; end++) { // loop through the string
    let char = str[end]; // get the current character
    if (char in seen) { // check if current character is already in the seen object
      start = Math.max(start, seen[char]); // update the start index of the current substring to the index of the last seen character
    }
    longest = Math.max(longest, end - start + 1); // update the longest substring length
    seen[char] = end + 1; // update the seen object with the current character and its index
  }
   //longest substring length
  return longest;
}

//Time complexity: O(n)
//Space complexity: O(n)