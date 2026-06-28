package Week_1_AlgorithmsAndDataStructures.Ex_5_TaskManagement;

public class TaskLinkedList {
    private Task head;

    public void addTask(Task task){
        if(head==null){
            head=task;
            return;
        }
        Task current=head;
        while(current.next!=null){
            current=current.next;
        }
        current.next=task;
    }

    public void traverseTask(){
        Task current=head;

        while(current!=null){
            System.out.println(current);
            current=current.next;
        }
    }

    public Task searchTask(int taskId){
        Task current=head;
        while(current!=null){
            if(current.getTaskId()==taskId){
                return current;
            }
            current=current.next;
        }
        return null;
    }

    public void deleteTask(int taskId){
        if(head==null){
            return;
        }
        if(head.getTaskId()==taskId){
            head=head.next;
            return;
        }
        Task current=head;
        while(current.next!=null && current.next.getTaskId()!=taskId){
            current=current.next;
        }
        if(current.next!=null){
            current.next=current.next.next;
        }

    }
}
