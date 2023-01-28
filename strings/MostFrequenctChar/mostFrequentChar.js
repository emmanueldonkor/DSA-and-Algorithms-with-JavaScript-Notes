function mostFrequentChar(str) {
  // Create an empty object to store character frequencies
  let charFrequency = {};
  // Iterate through the string
  for (let i = 0; i < str.length; i++) {
    // Get the current character
    let char = str[i];
    // If the character is not in the object, add it with a value of 1
    if (!charFrequency[char]) {
      charFrequency[char] = 1;
    }
    // If the character is already in the object, increment its value by 1
    else {
      charFrequency[char]++;
    }
  }
  // Initialize a variable to store the most frequent character and its frequency
  let mostFrequent = { char: "", frequency: 0 };
  // Iterate through the object
  for (let char in charFrequency) {
    // If the current character's frequency is higher than the current most frequent character's frequency
    if (charFrequency[char] > mostFrequent.frequency) {
      // Update the most frequent character and its frequency
      mostFrequent.char = char;
      mostFrequent.frequency = charFrequency[char];
    }
  }
  // Return the most frequent character
  return mostFrequent.char;
}

/*
Time complexity of O(n)
Space Complexity of O(n)
*/