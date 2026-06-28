package Week_1_DesignPrinciplesAndPatterns.Ex_7_ObserverPattern;

public class ObserverTest {
    public static void main(String args[]){
        StockMarket stock=new StockMarket();

        Observer observer1=new MobileApp();
        Observer observer2=new WebApp();

        stock.registerObserver(observer1);
        stock.registerObserver(observer2);
        
        stock.notifyObserver();
    }
}
