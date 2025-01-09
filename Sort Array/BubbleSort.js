function bubbleSort(arr){

let length = arr.length-1;

for(let i = 0; i < length;i++)
    for(let j = 0;j < length - i;j++){
        if(arr[j] > arr[j+1]){
            let temp = arr[j+1];
            arr[j+1] = arr[j];
            arr[j] = temp ;
        }
    }

    return -1;


}


const arr = [10,5,6,8,2,7,18,1];

bubbleSort(arr);

console.log(arr);