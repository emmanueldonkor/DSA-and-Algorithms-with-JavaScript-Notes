function closestNumber(arr) {
  let left = 0;
  let right = arr.length-1;
  let minSum = Number.POSITIVE_INFINITY;
  let minPair = [0,0];
  while(left < right){
      curSum = arr[left] + arr[right]
      if(Math.abs(curSum)< minSum){
          minSum = Math.abs(curSum)
          minPair = [arr[left], arr[right]]
      }
     
     if(curSum > 0){
         right -= 1;
     }
     else{
         left += 1;
     }
     
  }
 return minPair;
    
}

//This function works by using multiple pointers to check each value in the array





 