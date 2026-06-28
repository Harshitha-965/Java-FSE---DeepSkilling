package Week_1_DesignPrinciplesAndPatterns.Ex_5_DecoratorPattern;

public class SlackNotifierDecorator extends NotifierDecorator {
    public SlackNotifierDecorator(Notifier notifier){
        super(notifier);
    }

    public String send(){
        return "Notification sent via Slack: \n"+super.send();
    }
    
}
