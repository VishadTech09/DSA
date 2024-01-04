/**
 * Title : 9. Palindrome Number
 * Given an integer x, return true if x is a palindrome, and false otherwise.
 */
public class PalindromeNumber{
    public boolean isPalindrome(int x) {
        if (x < 0) {
        return false;
    }
    String numStr = x+"";
    int j = numStr.length() - 1;
    for (int i = 0; i <= j; i++) {
        if (numStr.charAt(i) != numStr.charAt(j)) {
            return false;
        }
        j--;
    }
    return true;
    }
}