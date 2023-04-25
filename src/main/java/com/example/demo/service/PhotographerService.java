package com.example.demo.service;

import java.util.List;
import java.util.UUID;

import org.springframework.stereotype.Service;

import com.example.demo.exception.PhotographerNotFoundException;
import com.example.demo.model.Photograper;
import com.example.demo.repo.PhotographerRepo;

@Service
public class PhotographerService {
    private final PhotographerRepo photographerRepo;


    public PhotographerService(PhotographerRepo photographerRepo){
        this.photographerRepo = photographerRepo;
    }

    public Photograper addPhotograper(Photograper photograper){
        photograper.setPhotoGrafCode(UUID.randomUUID().toString());
        return photographerRepo.save(photograper);
    }

    public List<Photograper> findAllPhotographer(){
        return photographerRepo.findAll();
    }

    public Photograper updatePhotograper(Photograper photograper) {
        return photographerRepo.save(photograper);
    }

    public Photograper findPhotographerById(Long id){
        return photographerRepo.findPhotographerById(id)
        .orElseThrow(() -> new PhotographerNotFoundException("Photgrapher by id " + id + "was not found"));
    }

    public void deletePhotographerById(Long id) {
        photographerRepo.deletePhotographerById(id);
    }


}
