package com.example.demo.repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.demo.model.Photographer;

public interface PhotographerRepo extends JpaRepository<Photographer, Long> {
    
    void deletePhotographerById(Long id);
    Optional<Photographer> findPhotographerById(Long id);
}
