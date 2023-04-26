package com.example.demo;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Images;
import com.example.demo.service.ImagesService;

@RestController
@RequestMapping("/Images")
public class ImagesController {
    private final ImagesService imagesService;

    public ImagesController (ImagesService imagesService){
        this.imagesService = imagesService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<Images>> getAllImages() {
        List<Images> images = imagesService.findAllImages();
        return new ResponseEntity<>(images, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Images> addImages(@RequestBody Images images) {
        Images newImages = ImagesService.addImages(images); 
        return new ResponseEntity<>(newImages, HttpStatus.CREATED);
    }

   





}
