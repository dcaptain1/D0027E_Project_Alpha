package com.example.demo.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Photograper {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY )
    @Column(nullable = false, updatable = false)
    private Long id;
    private String name; 
    private String email;
    private String phone;

    @Column(nullable = false, updatable = false)
    private String photoGrafCode;


    public Photograper() {}

    public Photograper(String name, String email, String phone) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        
    }
     
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getPhone() {
        return phone;
    }
    public void setPhone(String phone) {
        this.phone = phone;
    }    

    public String getPhotoGrafCode() {
        return photoGrafCode;
    }

    public void setPhotoGrafCode(String photoGrafCode) {
        this.photoGrafCode = photoGrafCode;
    }
    
    @Override
    public String toString(){
        return "Photographer{" + 
        "id=" + id + 
        ", name= '" + name + '/' +
        ", email= '" + email + '/' +     
        ", phone= '" + phone + '/' + 
        ", photoGrafCode= '" + photoGrafCode + '/' +
        '}'; 

    }    
}
