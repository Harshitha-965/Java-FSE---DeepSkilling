package Week_1_DesignPrinciplesAndPatterns.Ex_6_ProxyPattern;

public class RealImage implements Image{
    private String fileName;

    public RealImage(String fileName){
        this.fileName=fileName;
        loadRemoteServer();
    }
    public void loadRemoteServer(){
        System.out.println("Image: "+fileName+" is loading from the remote server...");
    }

    @Override
    public void display(){
        System.out.println("Image: "+fileName+" is displayed");
    }

}
