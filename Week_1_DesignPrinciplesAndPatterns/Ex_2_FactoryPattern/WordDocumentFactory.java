package Week_1_DesignPrinciplesAndPatterns.Ex_2_FactoryPattern;

public class WordDocumentFactory extends DocumentFactory{
    @Override
    public Document createDocument(){
        return new WordDocument();
    }
    
}
