package model;

import java.io.Serializable;

import org.springframework.web.jsf.FacesContextUtils;

import jakarta.annotation.Generated;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;


@Entity
public class Employee implements Serializable{

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  @Column(nullable = false, updatable = false)
  private Long id;
  private String name;
  private String email;
  private String jobTitle;
  private String phone;
  private String imageUrl;
  @Column(nullable = false, updatable = false)
  private String employeeCode;



  public Long getId() {
    return this.id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getName() {
    return this.name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getEmail() {
    return this.email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public String getJobTitle() {
    return this.jobTitle;
  }

  public void setJobTitle(String jobTitle) {
    this.jobTitle = jobTitle;
  }

  public String getPhone() {
    return this.phone;
  }

  public void setPhone(String phone) {
    this.phone = phone;
  }

  public String getImageUrl() {
    return this.imageUrl;
  }

  public void setImageUrl(String imageUrl) {
    this.imageUrl = imageUrl;
  }

  public String getEmployeeCode() {
    return this.employeeCode;
  }

  public void setEmployeeCode(String employeeCode) {
    this.employeeCode = employeeCode;
  }







  @Override
  public String toString(){
    return "Employee{"+
      "id=" +id+ "\n"+
      ", name=" +name+"\n"+
      ", email=" +email+"\n"+
      ", jobTitle=" +jobTitle+"\n"+
      ", phone=" +phone+"\n"+
      ", imageUrl=" +imageUrl+"\n"+
      "}";
  }



}
