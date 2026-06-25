package Week_2_AlgorithmsAndDataStructures.Ex_2_EcommercePlatform;

public class SearchTest {
    public static void main(String args[]){
        Product[] products = {
            new Product(101, "Laptop", "Electronics"),
            new Product(102, "Mobile", "Electronics"),
            new Product(103, "Shoes", "Footwear"),
            new Product(104, "Watch", "Accessories"),
            new Product(105, "Bag", "Fashion")
        };

        Product linearResult=SearchAlgorithms.linearSearch(products, 102);
        if(linearResult!=null){
            System.out.println("Linear Search Found: "+linearResult.productName);
        }
        else{
            System.out.println("Product not found");
        }

        Product binaryResult=SearchAlgorithms.binarySearch(products, 102);
        if(binaryResult!=null){
            System.out.println("Binary Search Found: "+binaryResult.productName);
        }
        else{
            System.out.println("Product not found");
        }
    }
}
