package com.example.demo.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Images;

public interface ImagesRepo extends JpaRepository<Images, Long> {
    
    void deleteImageById(Long id);
}
