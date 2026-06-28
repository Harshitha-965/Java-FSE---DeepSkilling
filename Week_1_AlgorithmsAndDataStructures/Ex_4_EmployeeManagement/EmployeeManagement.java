package Week_1_AlgorithmsAndDataStructures.Ex_4_EmployeeManagement;

public class EmployeeManagement {
    private Employee employees[]=new Employee[100];
    private int count=0;

    public void addEmployee(Employee employee){
        if(count<employees.length){
            employees[count]=employee;
            count++;
        }
        else{
            System.out.println("Employee array is full");
        }
    }

    public Employee searchEmployee(int employeeId){
        for(int i=0;i<count;i++){
            if(employees[i].getEmployeeId()==employeeId){
                return employees[i];
            }
        }
        return null;
    }

    public void traverseEmployee(){
        for(int i=0;i<count;i++){
            System.out.println(employees[i]);
        }
    }

    public void deleteEmployee(int employeeId){
        for(int i=0;i<count;i++){
            if(employees[i].getEmployeeId()==employeeId){
                for(int j=i;j<count-1;j++){
                    employees[j]=employees[j+1];
                }
                employees[count-1]=null;
                count--;
                return;
            }
        }
    }
}
