import java.util.ArrayList;
import java.util.List;

public class MergeSortedList {
    public static List<Integer> mergeTwoSortedLists(List<Integer> list1, List<Integer> list2) {
        int j = 0;
        /* If any of the list size is zero, we should return another list.*/
        if(list1.size()==0){
            return list2;
        }else if(list2.size()==0){
            return list1;
        }
        
        for (int i = 0; i < list1.size(); i++) {
            if (list1.get(i) <= list2.get(j)) {
                list2.add(j, list1.get(i));
            
                j++;           
                
            } else {
                j++;
                list2.add(j, list1.get(i));               
                
            }
        }
        return list2;
    }

    public static void main(String[] args) {
        List<Integer> list2 = new ArrayList<>();
        list2.add(1);
        list2.add(2);
        list2.add(3);
        List<Integer> list1 = new ArrayList<>();
         list1.add(0);
        list1.add(5);
        list1.add(6);
        list1.add(7);
        System.out.println(mergeTwoSortedLists(list1, list2));
    }
}
