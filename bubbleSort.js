function bubbleSort(arr) {
    console.time('选择排序耗时');  
    for(let i = 0,l=arr.length;i<l-1;i++) {
        for(let j = i+1;j<l;j++) { 
          if(arr[i]>arr[j]) {
                let tem = arr[i];
                arr[i] = arr[j];
                arr[j] = tem;
            }
        }
    }
    console.timeEnd('选择排序耗时');
    return arr;
}


var arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
console.log(bubbleSort(arr));

/*function createArray(num) {
    let arr = [];
    for(let i = 0; i < num; i++) {
        arr[i] = Math.floor(Math.random() * (num + 1));
    }
    return arr;
}

console.log(bubbleSort(createArray(10000)));*/