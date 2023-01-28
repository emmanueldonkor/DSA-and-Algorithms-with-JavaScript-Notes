function removeLeadingTrailingSpaces(str) {
    //split in to an array, remove and join them
  return str.split(/\s+/).join("");
}
/*    Time complexity: O(n)
- Space complexity: O(n) */