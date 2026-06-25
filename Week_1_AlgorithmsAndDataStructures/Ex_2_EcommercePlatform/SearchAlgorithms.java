package Week_1_AlgorithmsAndDataStructures.Ex_2_EcommercePlatform;

public class SearchAlgorithms {
    public static Product linearSearch(Product products[],int productId){
        for(Product product:products){
            if(product.productId == productId){
                return product;
            }
        }
        return null;
    }

    public static Product binarySearch(Product products[],int productId){
        int left = 0,right = products.length-1;
        while(left <= right){
            int mid=(left + right)/2;
            if(products[mid].productId == productId){
                return products[mid];
            }
            else if(products[mid].productId < productId){
                left = mid + 1;
            }
            else{
                right=mid-1;
            }
        }
        return null;
    }
}
