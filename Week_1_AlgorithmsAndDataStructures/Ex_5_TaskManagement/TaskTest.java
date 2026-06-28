package Week_1_AlgorithmsAndDataStructures.Ex_5_TaskManagement;

public class TaskTest {
    public static void main(String args[]){
        TaskLinkedList taskList=new TaskLinkedList();

        taskList.addTask(new Task(101,"Complete DSA Hands-on practises", "Pending"));
        taskList.addTask(new Task(102, "Practise Java", "In Progress"));
        taskList.addTask(new Task(103, "Leetcode Daily challenge", "Completed"));

        System.out.println("Tasks after adding");
        taskList.traverseTask();

        System.out.println("\nSearching Task ID 101");
        Task task=taskList.searchTask(101);
        if(task!=null){
            System.out.println(task);
        }
        else{
            System.out.println("Task not found");
        }

        taskList.deleteTask(103);
        System.out.println("\nTasks after deleting Task ID 103");
        taskList.traverseTask();

    }
}
