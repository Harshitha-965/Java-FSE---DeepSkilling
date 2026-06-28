package Week_1_DesignPrinciplesAndPatterns.Ex_6_ProxyPattern;

public class ProxyTest {
    public static void main(String args[]){
        Image image=new ProxyImage("Butterfly.png");
        image.display(); //Lazy Initialization

        image.display(); //Caching
    }
}
