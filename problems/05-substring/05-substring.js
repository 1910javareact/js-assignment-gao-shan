/* 5. Substring
Define function substring(someStr, startIndex, endIndex)
Return the substring contained between startIndex (inclusive) and endIndex (exclusive).
If incorrect input is entered, throw an exception stating the input was incorrect.
For example substring('hello', 0, 3) should give 'hel' */
function substring(someStr, startIndex, endIndex) {
    if((typeof(startIndex) === 'number')&&(typeof(endIndex) === 'number')&&(typeof(someStr) === 'string')&&(endIndex>=startIndex)&&(someStr.length > endIndex)){
        newString = ""
        for(i = startIndex; i <= endIndex; i++){
            newString += someStr.charAt(i)
        }
        return newString
    }
    else {
        return console.log("Please enter valid input")
    } 
}

console.log(substring("true", 1, 2))