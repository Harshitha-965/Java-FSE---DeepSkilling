package Week_1_DesignPrinciplesAndPatterns.Ex_9_CommandPattern;

public class CommandTest {
    public static void main(String args[]){
        Light light=new Light();

        Command lightOn=new LightOnCommand(light);
        Command lightOff=new LightOffCommand(light);

        RemoteControl remote=new RemoteControl(lightOn);
        remote.pressButton();

        remote=new RemoteControl(lightOff);
        remote.pressButton();

    }
}
