package Week_1_DesignPrinciplesAndPatterns.Ex_2_FactoryPattern;

public class PdfDocumentFactory extends DocumentFactory {
    @Override
    public Document createDocument(){
        return new PdfDocument();
    }
}
