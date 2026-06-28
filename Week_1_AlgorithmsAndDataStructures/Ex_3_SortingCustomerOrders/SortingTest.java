package Week_1_AlgorithmsAndDataStructures.Ex_3_SortingCustomerOrders;

public class SortingTest {
    public static void main(String args[]){
        Order orders1[]= {
            new Order(101,"Divya", 6500),
            new Order(102, "Janani", 2800),
            new Order(103,"Harshitha", 4000),
            new Order(104, "Kaaviya", 3400)
        };

        OrderSorter sorter=new OrderSorter();

        System.out.println("Original order");
        displayOrders(orders1);

        sorter.bubbleSort(orders1);
        System.out.println("\nAfter Bubble Sort");
        displayOrders(orders1);

        Order orders2[]= {
            new Order(101,"Divya", 6500),
            new Order(102, "Janani", 2800),
            new Order(103,"Harshitha", 4000),
            new Order(104, "Kaaviya", 3400)
        };

        sorter.quickSort(orders2);
        System.out.println("\nAfter Quick Sort");
        displayOrders(orders2);
    }
    public static void displayOrders(Order orders[]){
        for(Order order:orders){
            System.out.println(order);
        }
    }
}
