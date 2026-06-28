package Week_1_AlgorithmsAndDataStructures.Ex_6_LibraryManagement;

public class LibraryTest {
    public static void main(String args[]){
        Book books[]={
            new Book(101, "C", "Dennis Ritchie"),
            new Book(102, "DSA", "Mark Allen"),
            new Book(103, "Java", "James Gosling"),
            new Book(104, "Python", "Guido van Rossum"),
            new Book(105, "Spring", "Rod Johnson")
        };

        Library library=new Library(books);

        System.out.println("Linear Search");
        System.out.println(library.linerSearch("Python"));

        System.out.println("Binary Search");
        System.out.println(library.binarySearch("Python"));

    }
}
