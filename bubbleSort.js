function bubbleSort(arr) {
    console.time('1.冒泡排序耗时');  
    for(let i = 0,l=arr.length;i<l-1;i++) {
        for(let j = i+1;j<l;j++) { 
          if(arr[i]>arr[j]) {
                let tem = arr[i];
                arr[i] = arr[j];
                arr[j] = tem;
            }
        }
    }
    console.timeEnd('1.冒泡排序耗时');
    //return arr;
}



var arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
//console.log(bubbleSort(arr));
function bubbleSort1(arr) {
    var low = 0;
    var high = arr.length - 1; //设置变量的初始值
    var tmp, j;
    console.time('2.改进后冒泡排序耗时');
    while (low < high) {
        for (j = low; j < high; ++j) //正向冒泡,找到最大者
            if (arr[j] > arr[j + 1]) {
                tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
            --high; //修改high值, 前移一位
        for (j = high; j > low; --j) //反向冒泡,找到最小者
            if (arr[j] < arr[j - 1]) {
                tmp = arr[j];
                arr[j] = arr[j - 1];
                arr[j - 1] = tmp;
            }
            ++low; //修改low值,后移一位
    }
    console.timeEnd('2.改进后冒泡排序耗时');
    return arr;
} 
function createArray(num) {
    let arr = [];
    for(let i = 0; i < num; i++) {
        arr[i] = Math.floor(Math.random() * (num + 1));
    }
    return arr;
}

//console.log(bubbleSort(createArray(100000)));
console.log(bubbleSort1(createArray(100000)));