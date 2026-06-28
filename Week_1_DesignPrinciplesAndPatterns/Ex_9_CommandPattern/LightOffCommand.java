package Week_1_DesignPrinciplesAndPatterns.Ex_9_CommandPattern;

public class LightOffCommand implements Command{
    private Light light;

    public LightOffCommand(Light light){
        this.light=light;
    }
    
    @Override
    public void execute(){
        light.turnOff();
    }
}
