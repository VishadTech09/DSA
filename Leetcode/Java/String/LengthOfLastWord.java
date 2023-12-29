/**
 * Given a string s consisting of words and spaces, return the length of the last word in the string.
 * A word is a maximal substring consisting of non-space characters only.
 */
public class LengthOfLastWord {
    public int lengthOfLastWord(String str){
        int lastWordLength = 0;
        for (int i = (str.length() - 1); i >= 0; i--) {
            if (lastWordLength > 0 && str.charAt(i) == ' ') {
                return lastWordLength;
            } else if (str.charAt(i) != ' ') {
                lastWordLength++;
            }
        }
    
        return lastWordLength;
    }
}
