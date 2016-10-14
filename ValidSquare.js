//Question: Given a positive integer num, 
//write a function which returns True if num is a perfect square else False.

var isSquare = function(num) {
    var start = 1;
    var curr = 1;
    var tmp;
    if(num === 1) {
        return true;
    }
    while(curr <= num) {
        start += 2;
        tmp = curr + start;
        if(tmp < num) {
            curr = tmp;
        } else if(tmp === num){
            return true;
        } else {
            return false;
        }
    }
};