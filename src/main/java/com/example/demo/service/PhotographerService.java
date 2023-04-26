package com.example.demo.service;

import java.util.List;
import java.util.UUID;

import org.springframework.stereotype.Service;

import com.example.demo.exception.PhotographerNotFoundException;
import com.example.demo.model.Photographer;
import com.example.demo.repo.PhotographerRepo;

@Service
public class PhotographerService {
    private final PhotographerRepo photographerRepo;


    public PhotographerService(PhotographerRepo photographerRepo){
        this.photographerRepo = photographerRepo;
    }

    public Photographer addPhotographer(Photographer photograper){
        photograper.setPhotoGrafCode(UUID.randomUUID().toString());
        return photographerRepo.save(photograper);
    }

    public Images addImages(Images images){
        images.setImageCode(UUID.randomUUID().toString());
        return ImagesRepo.save(images);
    }

    public List<Photographer> findAllPhotographer(){
        return photographerRepo.findAll();
    }

    public Photographer updatePhotograper(Photographer photograper) {
        return photographerRepo.save(photograper);
    }

    public Photographer findPhotographerById(Long id){
        return photographerRepo.findPhotographerById(id)
        .orElseThrow(() -> new PhotographerNotFoundException("Photgrapher by id " + id + "was not found"));
    }

    public void deletePhotographerById(Long id) {
        photographerRepo.deletePhotographerById(id);
    }


}
