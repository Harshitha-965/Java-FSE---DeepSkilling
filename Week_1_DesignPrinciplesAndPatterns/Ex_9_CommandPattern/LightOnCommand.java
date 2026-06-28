package Week_1_DesignPrinciplesAndPatterns.Ex_9_CommandPattern;

public class LightOnCommand implements Command{
    private Light light;
    
    public LightOnCommand(Light light){
        this.light=light;
    }

    @Override
    public void execute(){
        light.turnOn();
    }
}
