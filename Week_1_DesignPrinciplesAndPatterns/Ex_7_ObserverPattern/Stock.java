package Week_1_DesignPrinciplesAndPatterns.Ex_7_ObserverPattern;

public interface Stock {
    void registerObserver(Observer observer);
    void deregisterObserver(Observer observer);
    void notifyObserver();
}
