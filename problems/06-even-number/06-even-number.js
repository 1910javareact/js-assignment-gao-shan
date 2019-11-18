/* 6. Even Number
Define function: isEven(someNum)
Return true if even, false if odd.
Do not use % operator. */
function isEven(someNum) {
    
    x = someNum / 2
    console.log(x)
    y = Math.floor(someNum / 2)
    console.log(y)
    if(x > y) {
        return false
    } else {
        return true
    }
}

console.log(isEven(98))