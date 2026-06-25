package Week_2_AlgorithmsAndDataStructures.Ex_7_FinancialForecasting;

public class FinancialForecast {
    public static double predictFutureValues(double currentValue,double growthRate,int years){
        if(years == 0){
            return currentValue;
        }
        return predictFutureValues(currentValue * (1+growthRate), growthRate, years-1);
    }
}
