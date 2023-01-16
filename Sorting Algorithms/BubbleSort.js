function bubbleSort(arr){
    //loop through the array
    for(let i = 0;  i < arr.length;  i++){
        //loop through the array again, comparing and swapping elements
        for(let j = 0; j < arr.length-i-1; j++){
            if(arr[j] > arr[j+1]){
                //swap
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

console.log(bubbleSort([0,3,4,6,7]))


//Bubble Sort Optimization
function bubbleSort(arr) {
  for (var i = arr.length - 1; i >= 0; i--) {
    var noSwaps = true;
    for (var j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}
