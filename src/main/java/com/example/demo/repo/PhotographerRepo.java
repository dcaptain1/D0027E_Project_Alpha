package com.example.demo.repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.demo.model.Photograper;

public interface PhotographerRepo extends JpaRepository<Photograper, Long> {
    
    void deletePhotographerById(Long id);
    Optional<Photograper> findPhotographerById(Long id);
}
