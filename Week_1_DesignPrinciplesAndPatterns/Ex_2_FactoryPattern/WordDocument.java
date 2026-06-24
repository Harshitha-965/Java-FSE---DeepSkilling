package Week_1_DesignPrinciplesAndPatterns.Ex_2_FactoryPattern;

public class WordDocument implements Document {
    @Override
    public void open(){
        System.out.println("Word Document opened");
    }
}
