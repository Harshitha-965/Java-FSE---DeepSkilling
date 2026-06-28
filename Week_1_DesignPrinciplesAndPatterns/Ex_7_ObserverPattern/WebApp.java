package Week_1_DesignPrinciplesAndPatterns.Ex_7_ObserverPattern;

public class WebApp implements Observer {
    @Override
    public void update(){
        System.out.println("Web app : Stock price updated");
    }
}
