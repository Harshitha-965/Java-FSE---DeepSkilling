package Week_1_DesignPrinciplesAndPatterns.Ex_11_DependencyInjection;

public class CustomerRepositoryImpl implements CustomerRepository {
    
    @Override
    public String findCustomerById(int id){
        return "Customer ID: "+id+" (Harshitha)";
    }
}
