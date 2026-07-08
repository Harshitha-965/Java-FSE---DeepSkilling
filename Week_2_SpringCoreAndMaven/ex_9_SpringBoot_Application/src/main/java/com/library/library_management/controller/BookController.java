package com.library.library_management.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.library.library_management.entity.Book;
import com.library.library_management.repository.BookRepository;

@RestController
@RequestMapping("/books")
public class BookController {
    
    private final BookRepository repository;

    public BookController(BookRepository repository) {
        this.repository = repository;
    }

    @PostMapping
    public Book addBook(@RequestBody Book book) {
        return repository.save(book);
    }

    @GetMapping
    public List<Book> getAllBooks() {
        return repository.findAll();
    }
}
