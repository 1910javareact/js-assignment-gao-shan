/* 1. Fibonacci
Define function: fib(n) 
Return the nth number in the fibonacci sequence. */
//declare vars and funcs first then run code
function fib(n) {

    //alwasy do input checking 

    if(isNaN(n)){
        throw "Try again with a num"
    }
    if(n<0){
        throw new Error("n must be greater than 0")
    }
    if(n === Infinity){
        throw false
    }
    if (n === 0){
        return 0
    }
    if(n === 1){
        return 1
    }

    return (fib(n-1)) + (fib(n-2)) 

}
try {
    console.log(fib('This string')) 
} catch(e){
    console.log(e)
}
try{
    console.log(fib(-10))
} catch(e){
    console.log(e)
}
try{
    console.log(fib(Infinity))
} catch(e) {
    console.log(e)
}
console.log(fib(6))