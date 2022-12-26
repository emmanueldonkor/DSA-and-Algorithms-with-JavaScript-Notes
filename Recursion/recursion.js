function print(n){
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
console.log(fibo(6));