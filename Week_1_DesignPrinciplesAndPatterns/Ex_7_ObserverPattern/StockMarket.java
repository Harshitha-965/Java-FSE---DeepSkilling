package Week_1_DesignPrinciplesAndPatterns.Ex_7_ObserverPattern;

import java.util.ArrayList;
import java.util.List;

public class StockMarket implements Stock {
    private List<Observer> observers=new ArrayList<>();

    @Override
    public void registerObserver(Observer observer){
        observers.add(observer);
    }

    @Override
    public void deregisterObserver(Observer observer){
        observers.remove(observer);
    }

    @Override
    public void notifyObserver(){
        for(Observer observer:observers){
            observer.update();
        }
    }
    
}
