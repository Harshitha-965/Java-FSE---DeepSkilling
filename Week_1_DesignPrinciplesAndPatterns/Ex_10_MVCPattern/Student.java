package Week_1_DesignPrinciplesAndPatterns.Ex_10_MVCPattern;

public class Student {
    private String name;
    private int id;
    private String grade;

    public Student(String name,int id, String grade){
        this.name=name;
        this.id=id;
        this.grade=grade;
    }

    public void setName(String name){
        this.name=name;
    }

    public String getName(){
        return name;
    }

    public void setId(int id){
        this.id=id;
    }

    public int getId(){
        return id;
    }

    public void setGrade(String grade){
        this.grade=grade;
    }

    public String getGrade(){
        return grade;
    }

}
