package Week_1_DesignPrinciplesAndPatterns.Ex_11_DependencyInjection;

public class CustomerService{
    private CustomerRepository customerRepository;

    public CustomerService(CustomerRepository customerRepository){
        this.customerRepository=customerRepository;
    }

    public void findCustomer(int id){
        System.out.println(customerRepository.findCustomerById(id));
    }
}
