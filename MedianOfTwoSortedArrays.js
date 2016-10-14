//question: There are two sorted arrays nums1 and nums2 of size m and n respectively.
// Find the median of the two sorted arrays.


var findMedianSortedArrays = function(nums1, nums2) {
    var m = nums1.length;
    var n = nums2.length;
    var newArr = [];
    var median;
    for (var i = 0,j = 0,k = 0; i < m + n;i++) {
        if (j >= m) {
            newArr[i] = nums2[k];
            k += 1;
        } else if(k >= n) {
            newArr[i] = nums1[j];
            j += 1;
        }else if (nums1[j] <= nums2[k]) {
            newArr[i] = nums1[j];
            j += 1;
        } else {
            newArr[i] = nums2[k];
            k += 1;
        }
    }
    if ((m + n)%2 === 0) {
        median = (newArr[(m +n)/2] + newArr[(m + n)/2 - 1])/2;
    }else {
        median = newArr[Math.floor((m + n)/2)];
    }
    return median;
};