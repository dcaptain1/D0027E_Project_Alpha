package com.example.demo.controller;

import java.io.IOException;
import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.db.ImageRepository;
import com.example.demo.model.Image;

public class ImageController {
    private byte[] bytes;

	@Autowired
	private ImageRepository imageRepository;
	
	@GetMapping("/get")
	public List<Image> getBooks() {
		return imageRepository.findAll();
	}
	
	@PostMapping("/upload")
	public void uploadImage(@RequestParam("imageFile") MultipartFile file) throws IOException {
		this.bytes = file.getBytes();
	}

	@PostMapping("/add")
	public void createImage(@RequestBody Image image) throws IOException {
		image.setPicByte(this.bytes);
		imageRepository.save(image);
		this.bytes = null;
	}
	
	@PutMapping("/update")
	public void updateImage(@RequestBody Image image) {
		imageRepository.save(image);
	}
}
