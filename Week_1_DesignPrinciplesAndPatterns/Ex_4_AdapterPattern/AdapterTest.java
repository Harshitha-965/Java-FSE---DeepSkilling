public class AdapterTest {
    public static void main(String args[]){
        PaymentProcessor processor1=new PaypalAdapter(new PaypalGateway());
        PaymentProcessor processor2=new StripeAdapter(new StripeGateway());

        processor1.processPayment();
        processor2.processPayment();
    }
}
