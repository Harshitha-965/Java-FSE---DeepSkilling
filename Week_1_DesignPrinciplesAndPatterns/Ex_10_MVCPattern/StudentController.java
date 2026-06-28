package Week_1_DesignPrinciplesAndPatterns.Ex_10_MVCPattern;

public class StudentController {
    private Student student;
    private StudentView studentview;

    public StudentController(Student student, StudentView studentview){
        this.student=student;
        this.studentview=studentview;
    }

    public void setStudentName(String name){
        student.setName(name);
    }

    public String getStudentName(){
        return student.getName();
    }

    public void setStudentGrade(String grade){
        student.setGrade(grade);
    }

    public String getStudentGrade(){
        return student.getGrade();
    }

    public void updateView(){
        studentview.displayStudentDetails(student.getName(), student.getId(), student.getGrade());
    }
}
