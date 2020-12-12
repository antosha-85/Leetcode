var isPalindrome = function(x) {
    let reversed = Number(x.toString().split("").reverse().join(""));
    return reversed === x ? true : false
};