//question: Validate if a given string is numeric
// example:" 0.1 " => true   "abc" => false  "2e10" => true  "1 a" => false


var isNumber = function(s) {
    if (isNaN(Number(s))) {
        return false;
    }
    
    var arr = s.trim().split('');
    if (arr.length === 0) {   // Number('') =0
        return false;
    }
    return true;
    
};