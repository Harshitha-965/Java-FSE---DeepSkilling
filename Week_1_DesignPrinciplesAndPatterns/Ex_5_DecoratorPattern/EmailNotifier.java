package Week_1_DesignPrinciplesAndPatterns.Ex_5_DecoratorPattern;

public class EmailNotifier implements Notifier {
    private String notification;
    
    public EmailNotifier(String notification){
        this.notification=notification;
    }
    public String send(){
        return notification;
    }
}
