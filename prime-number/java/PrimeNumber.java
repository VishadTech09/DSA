public class PrimeNumber {
    static boolean isNumberPrime(int A) {
        int counter = 0;
        boolean isPrime = false;

        for (int i = 1; i * i <= A; i++) {
            if (A % i == 0) {
                if (A / i == i) {
                    counter++;
                } else {
                    counter = counter + 2;
                }
            }

        }
        if (counter == 2) {
            isPrime = true;
        }
        return isPrime;
    }

    public static void main(String[] args) {
        System.out.println(isNumberPrime(0));
        System.out.println(isNumberPrime(1));
        System.out.println(isNumberPrime(2));
        System.out.println(isNumberPrime(3));
        System.out.println(isNumberPrime(4));
        System.out.println(isNumberPrime(5));
    }
}