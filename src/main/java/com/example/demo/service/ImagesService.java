package com.example.demo.service;

import java.util.UUID;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import com.example.demo.model.Images;
import com.example.demo.repo.ImagesRepo;

@Service
public class ImagesService {
    private final ImagesRepo imagesRepo;

    public ImagesService(ImagesRepo imagesRepo){
        this.imagesRepo = imagesRepo;
    }
    
    public Images addImages(Images images){
        images.setImageCode(UUID.randomUUID().toString());
        return ImagesRepo.save(images);
    }

    public List<Images> findAllImages(){
        return imagesRepo.findAll();
    }

    public Images updateImages(Images images) {
        return imagesRepo.save(images);
    }

    public void deleteImageById(Long id) {
        imagesRepo.deleteImageById(id);
    }
}
