package com.example.demo.exception;

public class PhotographerNotFoundException extends RuntimeException{
    public PhotographerNotFoundException(String message){
        super(message);
    }
}
