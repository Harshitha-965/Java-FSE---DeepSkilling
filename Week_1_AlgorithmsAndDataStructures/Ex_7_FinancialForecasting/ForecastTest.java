package Week_1_AlgorithmsAndDataStructures.Ex_7_FinancialForecasting;

public class ForecastTest {
    public static void main(String args[]){
        double currentValue = 1000;
        double growthRate = 0.10;
        int years = 3;

        double futureValue=FinancialForecast.predictFutureValues(currentValue, growthRate, years);

        System.out.println("Future Value: "+futureValue);
    }
}
