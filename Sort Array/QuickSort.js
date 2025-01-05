console.log("Hello, Node.js!");

function partiton(arr, high, low){
    debugger;
let partitionVal = arr[high];
let partitionIndex = low-1;    
for (let i = low; i <= high; i=i+1){
    if(arr[i]< partitionVal){
            partitionIndex = partitionIndex +1;
            let replaceHelper = arr[i];
            arr[i]=arr[partitionIndex];
            arr[partitionIndex] = replaceHelper;
        }
    }
        partitionIndex = partitionIndex +1;
        arr[high]=arr[partitionIndex];
        arr[partitionIndex] = partitionVal;

return partitionIndex;
}

function quickSort(arr, high, low){
 if(low>=high)
    return;
let partitionIndex = partiton(arr,high,low);
debugger;
quickSort(arr,high,partitionIndex+1);
quickSort(arr,partitionIndex-1,low);

    
}

const inputArr = [8,5,2,7,6,6,8,8,4,2,7];
console.log(inputArr);
let low = 0;
let high = inputArr.length -1;
quickSort(inputArr, high, low);
console.log(inputArr);
