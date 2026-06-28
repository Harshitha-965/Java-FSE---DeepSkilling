package Week_1_DesignPrinciplesAndPatterns.Ex_10_MVCPattern;

public class StudentView {
    public void displayStudentDetails(String name,int id,String grade){
        System.out.println("Student details");
        System.out.println("Name: "+name);
        System.out.println("ID: "+id);
        System.out.println("Grade: "+grade);
    }
}
