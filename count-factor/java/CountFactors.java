public class CountFactors {
    static int countFactor(int A) {
        int counter = 0;
        for(int i=1;i*i<=A;i++){
            if(A%i==0){
                if(A/i == i){
                    counter ++;
                }else{
                    counter = counter+2;
                }
            }
        }
        return counter;
    }

    public static void main(String[] args) {
        System.out.println(countFactor(1));
    }
}