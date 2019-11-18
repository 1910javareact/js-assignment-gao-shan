/* 2. Bubble Sort
Define function: bubbleSort(numArray)
Use the bubble sort algorithm to sort the array.
Return the sorted array. */
function bubbleSort(numArray) {

  for(let i=0;i<numArray.length-1;i++){
    for(let j=i+1;j<numArray.length-1;j++){
      let temp;
      if(numArray[j]<numArray[i]){
        temp=numArray[j];
        numArray[j]=numArray[i];
        numArray[i]=temp;
      }
    }

   } 
   return numArray
  }


let x = [1,6,4,7,8,2,56,32,44,321];
console.log(bubbleSort(x))