package Week_1_DesignPrinciplesAndPatterns.Ex_5_DecoratorPattern;

public class DecoratorTest {
    public static void main(String args[]){
        Notifier notifier=new EmailNotifier("Hello World!!!");

        SMSNotifierDecorator sms=new SMSNotifierDecorator(notifier);

        SlackNotifierDecorator slack=new SlackNotifierDecorator(sms);

        System.out.println(slack.send());
    }
}
