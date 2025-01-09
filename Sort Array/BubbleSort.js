function bubbleSort(arr){
    let sorted = false;
    let lastIndex = arr.length-1;
    let counterComplexity = 0;
    for(let i = 0; i < lastIndex && !sorted ;i++){
        //Flag to detect if the array is already sorted, reducing unnecessary iterations in the best case.
        sorted = true;
        for(let j = 0;j < lastIndex - i;j++){
            counterComplexity++;
            if(arr[j] > arr[j+1]){
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                sorted = false;
            }
        }
    }
    console.log('counterComplexity: ' + counterComplexity  );
    return arr;
}

console.log('Test 1:');
let arr = [10,5,6,1,8,2,7,18];
console.log('Input:', arr );
bubbleSort(arr);
console.log('Output:', arr );

console.log('Test 2:');
arr = [1,5,6,7,8,9,17,18];
console.log('Input:', arr );
bubbleSort(arr);
console.log('Output:', arr );

console.log('Test 3:');
arr = [18,15,13,12,10,9,7,1];
console.log('Input:', arr );
bubbleSort(arr);
console.log('Output:', arr );
