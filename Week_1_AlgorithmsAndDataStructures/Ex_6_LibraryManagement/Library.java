package Week_1_AlgorithmsAndDataStructures.Ex_6_LibraryManagement;

public class Library {
    private Book books[];

    public Library(Book books[]){
        this.books=books;
    }
    
    public Book linerSearch(String title){
        for(Book book:books){
            if(book.getTitle().equalsIgnoreCase(title)){
                return book;
            }
        }
        return null;
    }

    public Book binarySearch(String title){
        int low=0,high=books.length-1;
        
        while(low<=high){
            int mid=(low+high)/2;
            int result=books[mid].getTitle().compareToIgnoreCase(title);
            if(result==0){
                return books[mid];
            }
            else if(result<0){
                low=mid+1;
            }
            else{
                high=mid-1;
            }
        }
        return null;
    }
}
