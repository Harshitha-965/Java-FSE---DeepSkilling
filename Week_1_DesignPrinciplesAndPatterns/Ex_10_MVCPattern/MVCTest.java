package Week_1_DesignPrinciplesAndPatterns.Ex_10_MVCPattern;

public class MVCTest {
    public static void main(String args[]){
        Student student=new Student("Harshitha",101,"A");
        StudentView studentView=new StudentView();

        StudentController controller=new StudentController(student, studentView);

        controller.updateView();
        System.out.println();

        controller.setStudentName("Harshitha KG");
        controller.setStudentGrade("A+");

        controller.updateView();

    }
    
}
