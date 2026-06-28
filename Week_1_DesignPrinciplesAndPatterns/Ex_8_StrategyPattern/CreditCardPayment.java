package Week_1_DesignPrinciplesAndPatterns.Ex_8_StrategyPattern;

public class CreditCardPayment implements PaymentStrategy{
    @Override
    public void pay(){
        System.out.println("Payment made using Credit Card");
    }
}
