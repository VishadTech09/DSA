public class CountGoodString {
    public int countGoodSubstrings(String s) {
        int target = 3;
        int counter = 0;

        if(s.length() < 3){
            return counter;
        }

        if (s.charAt(0) != s.charAt(1) && s.charAt(0)!= s.charAt(2) && s.charAt(1) != s.charAt(2) ){
            counter++;
        }

        for (int i = target; i < s.length(); i++) {
            // console.log('remvoing ', i, (i-target+1),s[i], s[i-target+1])
            if (s.charAt(i - target + 1) != s.charAt(i) && s.charAt(i - target + 2) != s.charAt(i) && s.charAt(i - target + 2) != s.charAt(i - target + 1)) {
                counter++;
            }
        }
        return counter;
    }

    public static void main(String[] args) {
        CountGoodString g = new CountGoodString();
        System.out.println(g.countGoodSubstrings("x"));
        System.out.println(g.countGoodSubstrings("aababcabc"));
        System.out.println(g.countGoodSubstrings("xyzzaz"));
        System.out.println(g.countGoodSubstrings("owuxoelszb"));
    }
}
