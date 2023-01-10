function findMissingNumber(arr) {
  // remove duplicates from the array using Set
  const setArr = new Set(arr);
  arr = [...setArr];

  // Find the expected sum of the integers from 1 to n
  const n = arr.length + 1;
  const expectedSum = (n * (n + 1)) / 2;

  // Find the actual sum of the given list of integers
  const actualSum = arr.reduce((a, b) => a + b, 0);

  // Return the missing number by subtracting the actual sum from the expected sum
  return expectedSum - actualSum;
}
