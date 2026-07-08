package com.library.repository;

import org.springframework.stereotype.Repository;

@Repository
public class BookRepository {
    public BookRepository(){
        System.out.println("BookRepository bean created");
    }

    public void displayRepository(){
        System.out.println("Book Repository is working");
    }
    
}
