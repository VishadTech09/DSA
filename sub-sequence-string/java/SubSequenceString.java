public class SubSequenceString {

    public static boolean isSubsequence(String s, String t) {

        //in case of empty string it is alway subsequence string
        if(s.equals("")){
            return true;
        }

        boolean flag = false;
        int lastIndex = -1;
        for(int i=0; i< s.length();i++){
            
            lastIndex = t.indexOf(s.charAt(i),(lastIndex+1));
            if(lastIndex == -1){
                flag = false;
                break; // once you didn't get letter break the loop
            }else{
                flag = true;
            }
        }
        
        return flag;
    }

    public static void main(String[] args) {
        System.out.println("IsSubsequence String : " + isSubsequence("acb", "ahbgdc"));
    }
}
