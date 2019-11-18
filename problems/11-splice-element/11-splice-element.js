/* 11. Splice Element
Define function spliceElement(someArr, index)
Splice the element at the provided index in the array.
*/
function spliceElement(someArr, index) {
    if ((index.typeof(Number) == true) && (someArr.typeof(Object) ==true)) {
        if (index > -1){
            returnArray = someArr.splice(index, 1)
            return returnArray
        } else {
            console.log("Please enter a valid index")
        }
    } else {
        console.log("Please enter a valid array and index")
    }
  
}


