package com.example.demo.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Image")
public class Image {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "Title")
    private String Title;

    @Column(name = "Description")
    private String Description;

    @Column(name = "Year")
    private String Year;

    @Column(name = "picByte", length = 2000)
	private byte[] picByte;


    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getTitle() {
        return Title;
    }
    public void setTitle(String title) {
        Title = title;
    }
    public String getDescription() {
        return Description;
    }
    public void setDescription(String description) {
        Description = description;
    }
    public String getYear() {
        return Year;
    }
    public void setYear(String year) {
        Year = year;
    }
    public byte[] getPicByte() {
        return picByte;
    }
    public void setPicByte(byte[] picByte) {
        this.picByte = picByte;
    }
    
}
