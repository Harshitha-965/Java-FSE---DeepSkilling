package Week_1_DesignPrinciplesAndPatterns.Ex_11_DependencyInjection;

public class DependencyTest {
    public static void main(String args[]){
        CustomerRepository repository=new CustomerRepositoryImpl();

        CustomerService service=new CustomerService(repository);

        service.findCustomer(101);
    }
}
