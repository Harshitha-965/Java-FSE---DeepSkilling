package com.library.service;

import com.library.repository.BookRepository;

public class BookService {
    private BookRepository bookRepository;

    public BookService(){
        System.out.println("BookService bean created");
    }

    public BookService(BookRepository bookRepository){
        this.bookRepository=bookRepository;
        System.out.println("Constructor Injection Performed");
    }
    public void setBookRepository(BookRepository bookRepository){
        this.bookRepository=bookRepository;
        System.out.println("Setter Injection Performed");
    }

    public void displayService(){
        System.out.println("Book Service is working");
        bookRepository.displayRepository();
    }

}
