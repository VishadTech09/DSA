import java.util.ArrayList;
import java.util.List;

public class FizzBuzzGame {
    public static List<String> fizzBuzz(int n) {
        List<String> list = new ArrayList<String>(n); 
        for (int index = 1; index <= n; index++) {
            if (index % 3 == 0) {
                if (index % 5 == 0) {// divisible by 3 & 5
                    list.add("FizzBuzz");
                } else { // only divisible by 3
                    list.add("Fizz");
                }
            } else if (index % 5 == 0) { // only divisible by 5
                list.add("Buzz");
            } else {
                list.add(index+"");
            }
    
        }
        return list;
    }

    public static void main(String[] args) {
        System.out.println(fizzBuzz(10));
    }
}
