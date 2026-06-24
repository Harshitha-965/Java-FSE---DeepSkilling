package Week_1_DesignPrinciplesAndPatterns.Ex_2_FactoryPattern;

public class PdfDocument implements Document {
    @Override
    public void open(){
        System.out.println("PDF Document opened");
    }
}
