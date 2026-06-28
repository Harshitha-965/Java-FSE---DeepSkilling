package Week_1_AlgorithmsAndDataStructures.Ex_1_InventoryManagementSystem;

import java.util.HashMap;
import java.util.Map;

public class InventoryManager {
    private Map<Integer,Product> inventory=new HashMap<>();

    public void addProduct(Product product){
        inventory.put(product.getProductId(),product);
    }

    public void deleteProduct(int productId){
        inventory.remove(productId);
    }

    public void updateProduct(int productId,int quantity){
        if(inventory.containsKey(productId)){
            inventory.get(productId).setQuantity(quantity);
        }
    }

    public void displayProducts(){
        for(Product product:inventory.values()){
            System.out.println(product);
        }
    }


}
