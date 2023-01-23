function longestPalindrome(str) {
  let longest = "";
  for (let i = 0; i < str.length; i++) {
    // Check for palindromes of odd length
    let oddPalindrome = checkPalindrome(str, i, i);
    if (oddPalindrome.length > longest.length) {
      longest = oddPalindrome;
    }

    // Check for palindromes of even length
    let evenPalindrome = checkPalindrome(str, i, i + 1);
    if (evenPalindrome.length > longest.length) {
      longest = evenPalindrome;
    }
  }

  return longest;
}
