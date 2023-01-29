/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    //store the last element  and find it's length
  let lastWord = s.trim().split(" ").pop();
  let lengthOfLastWord = lastWord.length;
  return lengthOfLastWord;
};
