import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  constructor(){ };
  ngOnInit(): void { }

  title: string = 'Bothnia Papers';

  goToAboutPage(){
    console.log("going to about page...")

  }
}
