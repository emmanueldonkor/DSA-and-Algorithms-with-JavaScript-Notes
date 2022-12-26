/*function print(n){
    console.log(n);
    print(n + 1);
}

//print(1);

function fibo(n){
    if(n < 2){
        return n;
    }
    return fibo(n-1) + fibo(n-2);
}
console.log(fibo(6)); */

const search = (arr, target, start, end) =>{
    //The base case
    if(start > end){
        return -1;
    }
    let middle =parseInt(start+(end-start) /2)

    if(arr[middle] === target){
        return middle;
    }
    if(target < arr[middle]){
        return search(arr, target, start, middle-1 )
    }
    return search(arr, target, middle+1, end )
}
let start = 0;
let arr = [1,2,34,55,66,78]
let end = arr.length;
target = 55;
console.log(search(arr, target, start, end))