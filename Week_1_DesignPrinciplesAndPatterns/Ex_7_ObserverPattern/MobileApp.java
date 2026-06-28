package Week_1_DesignPrinciplesAndPatterns.Ex_7_ObserverPattern;

public class MobileApp implements Observer {
    @Override
    public void update(){
        System.out.println("Mobile app : Stock price updated");
    }
}
