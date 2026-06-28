package Week_1_AlgorithmsAndDataStructures.Ex_1_InventoryManagementSystem;

public class InventoryTest {
    public static void main(String args[]){
        InventoryManager inventory=new InventoryManager();

        inventory.addProduct(new Product(101, "Mobile", 3, 15000));
        inventory.addProduct(new Product(102, "TV", 2, 50000));
        
        System.out.println("Inventory after adding products");
        inventory.displayProducts();

        inventory.updateProduct(101, 5);
        System.out.println("Inventory after updating products");
        inventory.displayProducts();

        inventory.deleteProduct(102);
        System.out.println("Inventory after deleting products");
        inventory.displayProducts();

    }
}
