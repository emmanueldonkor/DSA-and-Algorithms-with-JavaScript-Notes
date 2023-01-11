function productOfArrays(array, index = 0){
    if(index === array.length())return 1;

    return array[index] * productOfArrays(array, index+1)
}