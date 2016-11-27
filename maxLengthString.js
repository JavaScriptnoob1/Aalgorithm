
// 得到两个字符串中的最长公共字符串
function getMax(a, b) {
    let aLen = a.length;
    let bLen = b.length;
    let index = 0, beginIndex = 0, endIndex = 0;
    for (index; index < aLen; index++) {
        let i = 0, begin = index, end = index;
        let aChar = a.charAt(index);// 遍历a中的字符
        while (i < bLen && aChar !== b.charAt(i)) { // 将a 中的字符与b中的字符进行匹配
            i++
        }
        if (i == bLen) {  //如果没有匹配到，调到下次循环
            continue;
        }
        while(end < aLen && i < bLen && a.charAt(end) === b.charAt(i)) {//继续匹配后续字符
            end++;
            i++;
        }
        if((end - begin) > (endIndex - beginIndex)) {// 将最长的字符串两端字符保存
            beginIndex = begin;
            endIndex = end;
        }
    }
    return a.substring(beginIndex, endIndex);
}
