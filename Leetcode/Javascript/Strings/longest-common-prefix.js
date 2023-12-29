/**
 * Title : 14. Longest Common Prefix
 * Write a function to find the longest common prefix string amongst an array of strings.
 * If there is no common prefix, return an empty string "".
 * @param {*} strs 
 * @returns 
 */
const longestCommonPrefix = function(strs) {
    let prefix = [];
    let firstElement = strs[0];
     
    for(i=0;i<firstElement.length;i++){
        for(j=1;j<strs.length;j++){            
            if(i >= strs[j].length() || strs[j].charAt(i) != firstElement.charAt(i)){
                return prefix.join('');
            }
        }   
        prefix.push(firstElement.charAt(i));     
    }
    return prefix.join('');
};
console.log(longestCommonPrefix([""]));
console.log(longestCommonPrefix(["flower","flow","flight"]));
console.log(longestCommonPrefix(["dog","racecar","car"]));