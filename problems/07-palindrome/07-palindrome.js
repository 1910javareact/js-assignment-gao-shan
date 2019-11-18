/* 7. Palindrome
Define function isPalindrome(someStr)
Return true if someStr is a palindrome, otherwise return false */

function isPalindrome(someStr) {
    
    //reverse the string
    let reversed = "";
    for(i = someStr.length; i >= 0 ; i--){
        reversed += someStr.charAt(i)
    }
    //compare char values for str and reversed; return false if unequal 
    for(i = 0; i < someStr.length; i++){
        if (someStr.charAt(i) != reversed.charAt(i)) {
            console.log("false")
            return false
        }
    }
    console.log("true")
    return true 
  
}
a = "racecar"
isPalindrome(a)