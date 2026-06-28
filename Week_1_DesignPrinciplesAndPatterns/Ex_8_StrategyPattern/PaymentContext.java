package Week_1_DesignPrinciplesAndPatterns.Ex_8_StrategyPattern;

public class PaymentContext {
    private PaymentStrategy paymentStrategy;

    public PaymentContext(PaymentStrategy paymentStrategy){
        this.paymentStrategy=paymentStrategy;
    }

    public void executePayment(){
        paymentStrategy.pay();
    }
}
