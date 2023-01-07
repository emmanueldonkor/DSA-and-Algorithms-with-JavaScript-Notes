function findSmallestElements(arr) {
  let smallest = Number.POSITIVE_INFINITY;
  let secondSmallest = Number.POSITIVE_INFINITY;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      secondSmallest = smallest;
      smallest = arr[i];
    } else if (arr[i] < secondSmallest) {
      secondSmallest = arr[i];
    }
  }
  return [smallest, secondSmallest];
}
/*This function works by keeping track of the smallest and second smallest elements as it iterates through the array. If it encounters a new element that is smaller than the current smallest element, it updates both the smallest and second smallest elements. If it encounters an element that is smaller than the current second smallest element, 
but not smaller than the current smallest element, it updates just the second smallest element.*/