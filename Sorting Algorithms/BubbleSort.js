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