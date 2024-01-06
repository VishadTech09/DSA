/**
 * Title : 392. Is Subsequence
 * Given two strings s and t, return true if s is a subsequence of t, or false otherwise.
 * A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) 
 * of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of 
 * "abcde" while "aec" is not).
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    let i = 0;
    let j = 0;
    while (j < t.length) {
        //If we are done with length of substring we should exit
        if (i == s.length) {
            return true;
        }
        else {
            if (s[i] == t[j]) {
                i++;
            }
            j++;
        }

    }

    if (i == s.length) {
        return true;
    } else {
        return false;
    }
}; 