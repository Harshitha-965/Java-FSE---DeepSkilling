package Week_1_AlgorithmsAndDataStructures.Ex_4_EmployeeManagement;

public class EmployeeTest {
    public static void main(String args[]){
        EmployeeManagement manager=new EmployeeManagement();

        manager.addEmployee(new Employee(101, "Abi", "Developer", 65000));
        manager.addEmployee(new Employee(102, "Lakshmi", "AI Engineer", 67000));
        manager.addEmployee(new Employee(103, "Thanuja", "Manager", 70000));

        System.out.println("Employees after adding");
        manager.traverseEmployee();

        System.out.println("\nSearching Employee with ID 102");
        Employee employee=manager.searchEmployee(102);

        if(employee!=null){
            System.out.println(employee);
        }
        else{
            System.out.println("Employee not found");
        }

        manager.deleteEmployee(101);
        System.out.println("\nEmployeed after deleting Employee 101");
        manager.traverseEmployee();
    }
}
