package Week_1_DesignPrinciplesAndPatterns.Ex_5_DecoratorPattern;

public class SMSNotifierDecorator extends NotifierDecorator {
    public SMSNotifierDecorator(Notifier notifier){
        super(notifier);
    }
    public String send(){
        return "Notification sent via SMS: \n"+super.send();
    }
    
}
