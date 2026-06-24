package Week_1_DesignPrinciplesAndPatterns.Ex_2_FactoryPattern;

public class ExcelDocumentFactory extends DocumentFactory {
    @Override
    public Document createDocument(){
        return new ExcelDocument();
    }
}
