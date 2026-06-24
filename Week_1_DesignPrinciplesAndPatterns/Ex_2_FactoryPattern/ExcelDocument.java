package Week_1_DesignPrinciplesAndPatterns.Ex_2_FactoryPattern;

public class ExcelDocument implements Document {
    @Override
    public void open(){
        System.out.println("Excel Document opened");
    } 
}
