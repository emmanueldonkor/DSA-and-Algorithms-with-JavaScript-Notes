//a count down function
//Tail recursion
function countDown(num){
    if(num <= 0){
    console.log("all done");
      return
    }
    console.log(num)
    countDown(num-1)
}
countDown(5)

function sumRange(num){
    if(num === 1) return 1;
    return num + sumRange(num-1);
}