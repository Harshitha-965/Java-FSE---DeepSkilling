package Week_1_DesignPrinciplesAndPatterns.Ex_5_DecoratorPattern;

public abstract class NotifierDecorator implements Notifier {
    private Notifier notifier;

    public NotifierDecorator(Notifier notifier){
        this.notifier=notifier;
    }
    public String send(){
        return notifier.send();
    }
}
