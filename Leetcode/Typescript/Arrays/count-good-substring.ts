/**
 * 1876. Substrings of Size Three with Distinct Characters
 * A string is good if there are no repeated characters. Given a string s​​​​​, return the number of good substrings of length  
 * three in s​​​​​​. 
 * Note that if there are multiple occurrences of the same substring, every occurrence should be counted.
 * A substring is a contiguous sequence of characters in a string.
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function (s: string) {
    let target = 3;
    let counter = 0;

    if(s.length < 3){
        return counter;
    }

    if (s[0] != s[1] && s[0] != s[2] && s[1] != s[2]) {
        counter++
    }

    for (let i = target; i < s.length; i++) {
        //console.log('remvoing ', i, (i-target+1),s[i], s[i-target+1])
        if (s[i - target + 1] != s[i] && s[i - target + 2] != s[i] && s[i - target + 2] != s[i - target + 1]) {
            counter++;
        }
    }
    return counter;
};
console.log(countGoodSubstrings("x"));
console.log(countGoodSubstrings('aababcabc'));
console.log(countGoodSubstrings('xyzzaz'))
console.log(countGoodSubstrings('owuxoelszb'))