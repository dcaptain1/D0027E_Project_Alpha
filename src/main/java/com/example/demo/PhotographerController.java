package com.example.demo;


import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Photographer;
import com.example.demo.service.PhotographerService;

@RestController
@RequestMapping("/photographer")
public class PhotographerController {
    private final PhotographerService photographerService;

    public PhotographerController (PhotographerService photographerService){
        this.photographerService = photographerService;
    }
    
    @GetMapping("/all")
    public ResponseEntity<List<Photographer>> getAllEmployees() {
        List<Photographer> photograper = photographerService.findAllPhotographer();
        return new ResponseEntity<>(photograper, HttpStatus.OK);
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<Photographer> getPhotographerById(@PathVariable("id") Long id) {
        Photographer photographer = photographerService.findPhotographerById(id);
        return new ResponseEntity<>(photographer, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Photographer> addPhotographer(@RequestBody Photographer photographer) {
        Photographer newPhotographer = photographerService.addPhotographer(photographer); 
        return new ResponseEntity<>(newPhotographer, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<Photographer> updatePhotgrapher(@RequestBody Photographer photographer) {
        Photographer updatePhotographer = photographerService.updatePhotograper(photographer); 
        return new ResponseEntity<>(updatePhotographer, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deletePhotographer(@PathVariable("id") Long id) {
        photographerService.deletePhotographer(id); 
        return new ResponseEntity<>(HttpStatus.OK);
    }



}
