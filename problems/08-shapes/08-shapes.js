/* 8. Shapes
Define function: printShape(shape, height, character)
shape is a String and is either "Square", "Triangle", "Diamond".
height is a Number and is the height of the shape. Assume the number is odd.
character is a String that represents the contents of the shape. Assume this String contains just one character.
Use a switch statement to determine which shape was passed in.
Use the console.log function to print the desired shape.
Example for printShape("Square", 3, "%");
%%%
%%%
%%%
Example for printShape("Triangle", 3, "$");
$
$$
$$$
Example for printShape("Diamond", 5, "*");
  *
 ***
*****
 ***
  * 
*/
function printShape(shape, height, character) {
  charString = ""
  switch(shape){
    case 'Square': 
      for (let i = 0; i < height; i++){
        let printline='';        
      
      for (let j = 0; j < height; j++){
        printline=printline+character;
      }
    
      console.log(printline)
    }
    break;
    case 'Triangle': 
      for (let i = 0; i < height; i ++){
        let printline='';
        for(let j=0;j<i+1;j++){
            printline=printline+character;
        }
        console.log(printline)
      }
      break;
     
    case 'Diamond':
      
      
    
  }
}

printShape('Square', 5, "X")
printShape('Triangle', 7, '*')
//printShape('Diamond', 7, '+')
