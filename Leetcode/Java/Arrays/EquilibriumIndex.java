/**
 * Title : Equilibrium index of an array 
 * You are given an array A of integers of size N.
 * Your task is to find the equilibrium index of the given array
 * The equilibrium index of an array is an index such that the sum of elements at lower indexes 
 * is equal to the sum of elements at higher indexes.
 * If there are no elements that are at lower indexes or at higher indexes, then the corresponding sum of elements is considered as 0.
 */
import java.util.ArrayList;
import java.util.Arrays;

public class EquilibriumIndex {
    public int solve(ArrayList<Integer> A) {

        int higherIndexSum = 0;

        for (int i = 1; i < A.size(); i++) {
            higherIndexSum += A.get(i);
        }
        int lowerSum = 0;
        int higherSum = higherIndexSum;

        for (int i = 0; i < A.size(); i++) {
            if (i == 0) {
                lowerSum = 0;
                higherSum = higherIndexSum;
            } else if (i == A.size() - 1) {
                higherSum = 0;
                lowerSum = A.get(0) + higherIndexSum - A.get(i);
            } else {
                lowerSum = lowerSum + A.get(i - 1);
                higherSum = higherSum - A.get(i);
            }

            if (lowerSum == higherSum) {
                return i;
            }

        }

        return -1;
    }

    public int solve1(ArrayList<Integer> A) {

        int higherIndexSum = 0;

        for (int i = 0; i < A.size(); i++) {
            higherIndexSum += A.get(i);
        }
        int lowerSum = 0;

        for (int i = 0; i < A.size(); i++) {

            higherIndexSum = higherIndexSum - A.get(i);
            if (lowerSum == higherIndexSum) {
                return i;
            }
            lowerSum = lowerSum + A.get(i);
        }

        return -1;
    }

    public static void main(String args[]) {
        EquilibriumIndex e = new EquilibriumIndex();
        Integer[] array = { 1, 2, 3, 7, 1, 2, 3 };
        Integer[] array1 = { -7, 1, 5, 2, -4, 3, 0 };
        Integer[] array2 = { 1, 2, 3 };
        System.out.println(e.solve1(new ArrayList<>(Arrays.asList(array))));
        System.out.println(e.solve1(new ArrayList<>(Arrays.asList(array1))));
        System.out.println(e.solve1(new ArrayList<>(Arrays.asList(array2))));
    }
}
