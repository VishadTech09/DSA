/**
 * Title : 9. Palindrome Number
 * Given an integer x, return true if x is a palindrome, and false otherwise.
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    if (x < 0) {
        return false;
    }
    const numStr = x.toString();
    j = numStr.length - 1;
    for (i = 0; i <= j; i++) {
        if (numStr.charAt(i) != numStr.charAt(j)) {
            return false;
        }
        j--
    }
    return true
};