/**
 * Title : 14. Longest Common Prefix
 * Write a function to find the longest common prefix string amongst an array of strings.
 * If there is no common prefix, return an empty string "".
 * @param {*} strs 
 * @returns 
 */

public class LongestCommonPrefix {
    public String longestCommonPrefix(String[] strs) {
        StringBuffer prefix = new StringBuffer("");
        String firstElement = strs[0];

        for (int i = 0; i < firstElement.length(); i++) {
            for (int j = 1; j < strs.length; j++) {
                 if (i >=strs[j].length() || strs[j].charAt(i) != firstElement.charAt(i)) {
                    return prefix.toString();
                }
            }
            prefix.append(firstElement.charAt(i));
        }
        return prefix.toString();
    }
}
