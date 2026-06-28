package Week_1_DesignPrinciplesAndPatterns.Ex_8_StrategyPattern;

public class PayPalPayment implements PaymentStrategy{
    @Override
    public void pay(){
        System.out.println("Payment made using PayPal");
    }
}
