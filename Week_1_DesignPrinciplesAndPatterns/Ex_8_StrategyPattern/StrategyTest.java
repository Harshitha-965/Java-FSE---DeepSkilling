package Week_1_DesignPrinciplesAndPatterns.Ex_8_StrategyPattern;

public class StrategyTest {
    public static void main(String args[]){
       PaymentContext context= new PaymentContext(new CreditCardPayment());
       context.executePayment();

       context=new PaymentContext(new PayPalPayment());
       context.executePayment();
    }
}
