/* 3. Reverse String
Define function: reverseStr(someStr)
Reverse and return the String. */
function reverseStr(someStr) {
  let newString = ""
  let len = someStr.length
  for (i = len-1; i >= 0; i--){
      newString += someStr.charAt(i)
  }
  return newString.toString()
}

console.log(reverseStr("jeffrey"))