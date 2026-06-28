package Week_1_DesignPrinciplesAndPatterns.Ex_9_CommandPattern;

public class RemoteControl {
    private Command command;

    public RemoteControl(Command command){
        this.command=command;
    }

    public void pressButton(){
        command.execute();
    }
}
