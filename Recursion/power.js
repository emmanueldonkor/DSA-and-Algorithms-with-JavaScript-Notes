function pow(base, exponent){
    if(exponent === 0) return 1;
    return base * pow(base ,exponent-1);
}
//Time and space complexity of O(n)

//improve solution
function power(base, exponent){
    if(exponent === 0) return 1;
    else if(exponent /2 === 0)
     y = power(base, exponent/2)
     return y * y;
return base * power(base, exponent -1)
    
}

//Time and space complexity of O(log n)