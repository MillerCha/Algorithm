// Input: A sorted array with one element out of place
// Goal: Find the misplaced element and its correct index

function findMisplacedElement(arr){
    
    const lastIndex = arr.length - 1;

    let notSortedValue;
    let correctIndex;
    // Starting index to search for the correct position
    let startIndexToSearchTheCorrectPlace = 0; 

    // First loop: Locate the misplaced element
    for(let i=0;i<lastIndex && notSortedValue == undefined ;i++){
        if(arr[i] > arr[i+1]){
            if(arr[i] > arr[i+2]){
                notSortedValue =  arr[i];
                // Begin search for position after i
                startIndexToSearchTheCorrectPlace = i+1;
            }
            else{
                notSortedValue =  arr[i+1];
            }
        }

    }

    // Second loop: Find the correct position for the misplaced element
    for(let j = startIndexToSearchTheCorrectPlace ;j <= lastIndex && correctIndex == undefined;j++ ){
        if(notSortedValue <= arr[j]){
            correctIndex = j; 
        }
    }
    // If no suitable position was found, the element belongs at the end of the array
    if(correctIndex == undefined){
        correctIndex = lastIndex;
    }


    return {correctIndex,notSortedValue};

}

let arr=[1,5,2,3,4];
console.log('input: ' ,arr, 'output: ',findMisplacedElement(arr));
arr=[1,2,1,3,4];
console.log('input: ' ,arr, 'output: ',findMisplacedElement(arr));
arr=[2,3,4,1];
console.log('input: ' ,arr, 'output: ',findMisplacedElement(arr));
arr=[2,5,3,4];
console.log('input: ' ,arr, 'output: ',findMisplacedElement(arr));