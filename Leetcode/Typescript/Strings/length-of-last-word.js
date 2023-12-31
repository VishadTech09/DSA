/**
 * Given a string s consisting of words and spaces, return the length of the last word in the string.
 * A word is a maximal substring consisting of non-space characters only.
 * @param {*} s 
 */

const lengthOfLastWord = (s)=> {
    let lastWordLength=0;
    for(i=(s.length-1);i>=0;i--){
        if(lastWordLength>0 && s.charAt(i) == ' '){
            return lastWordLength;
        }else if(s.charAt(i) != ' '){
            lastWordLength++;
        }
    }

    return lastWordLength;
};
console.log(lengthOfLastWord(""));
console.log(lengthOfLastWord("      "));
console.log(lengthOfLastWord("Hello World"));
console.log(lengthOfLastWord("   fly me   to   the moon  "));
console.log(lengthOfLastWord("luffy is still joyboy"));