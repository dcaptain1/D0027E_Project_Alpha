package com.example.demo.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Images {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY )
    private Long id; 
    
    private byte[] content; 
    
    @Column
    private String title; 
    private String description; 
    private String category; 
    private String year; 
    private String publishedByName; 

    public Images() {}

    
    public Images(String title, String description, String category, String year, String publishedByName ) { 
        this.title = title;
        this.description = description;
        this.category = category;
        this.year = year;
        this.publishedByName = publishedByName;
    }

    public byte[] getContent() {
        return content;
    }
    public void setContent(byte[] content) {
        this.content = content;
    }
    public String getTitle() {
        return title;
    }
    public void setTitle(String title) {
        this.title = title;
    }
    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }
    public String getCategory() {
        return category;
    }
    public void setCategory(String category) {
        this.category = category;
    }


    public String getYear() {
        return year;
    }


    public void setYear(String year) {
        this.year = year;
    }


    public String getPublishedByName() {
        return publishedByName;
    }


    public void setPublishedByName(String publishedByName) {
        this.publishedByName = publishedByName;
    }    

}
