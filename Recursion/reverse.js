//Recursive function to reverse a string
function reverse(str){
 if(str === "")  {
    return
 } 
 return reverse(str.substring(1) + str.charAt(0))
}
