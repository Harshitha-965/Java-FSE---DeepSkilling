package com.library;

import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.library.repository.BookRepository;
import com.library.service.BookService;

public class LibraryManagementApplication {
    
    public static void main(String args[]){
        ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");

        BookRepository repository = context.getBean(BookRepository.class);

        BookService service = context.getBean(BookService.class);

        repository.displayRepository();
        service.displayService();

        context.close();
    }
}
