// Takes a string and a character and returns the number of occurrences of that character in the string
function countChar(str, char) {
  // Initialize count
  let count = 0;
  // Iterate through string
  for (let i = 0; i < str.length; i++) {
    // Increment count if char is found
    if (str[i] === char) count++;
  }
  // Return count
  return count;
}
//space complexity O(n)
//Time Complexity O(n)