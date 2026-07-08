package com.library.library_management.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.library.library_management.entity.Book;

public interface BookRepository extends JpaRepository<Book,Integer> {
    
}
