package com.library.service;

import org.springframework.stereotype.Service;

@Service
public class BookService {
    public BookService(){
        System.out.println("BookService bean created");
    }

    public void displayService(){
        System.out.println("Book Service is working");
    }

}
