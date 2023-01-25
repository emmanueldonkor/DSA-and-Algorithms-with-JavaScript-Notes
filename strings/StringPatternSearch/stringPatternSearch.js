function patternExists(str, pattern) {
  // set two pointers, one that points to the beginning of the pattern and one that points to the beginning of the string
  let p = 0;
  let s = 0;

  // while the pointer for the pattern is less than the length of the pattern
  while (p < pattern.length) {
    // if the character at the pointer of the string equals the character of the pattern at the pointer
    if (str[s] === pattern[p]) {
      // increment both pointers
      s++;
      p++;
      // if it does not equal
    } else {
      // reset the pointer for the pattern to 0
      p = 0;
      // and increment the pointer for the string
      s++;
    }
  }
  // if the pointer for the pattern is equal to the length of the pattern, it has been matched, so return true
  // otherwise, the pattern has not been found, so return false
  return p === pattern.length ? true : false;
}
