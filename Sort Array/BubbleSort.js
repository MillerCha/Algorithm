function bubbleSort(arr){
    let sorted = false;
    let length = arr.length-1;
    let counterComplexity = 0;
    for(let i = 0; i < length && !sorted ;i++){
        sorted = true;
        for(let j = 0;j < length - i;j++){
            counterComplexity++;
            if(arr[j] > arr[j+1]){
                let temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp ;
                sorted = false;
            }
        }
    }
console.log('counterComplexity: ' + counterComplexity  );

}

console.log('Test 1:');
let arr = [10,5,6,1,8,2,7,18];
console.log(arr);
bubbleSort(arr);
console.log(arr);

console.log('Test 2:');
arr = [1,5,6,7,8,9,17,18];
console.log(arr);
bubbleSort(arr);
console.log(arr);

console.log('Test 2:');
arr = [1,5,6,7,8,9,17,18];
console.log(arr);
bubbleSort(arr);
console.log(arr);

console.log('Test 4:');
arr = [18,15,13,12,10,9,7,1];
console.log(arr);
bubbleSort(arr);
console.log(arr);
