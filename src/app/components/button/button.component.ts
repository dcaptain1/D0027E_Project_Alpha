import { Component,Input ,OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit{

@Input() text: string;
@Input() color: string;


constructor(){}

ngOnInit(): void {

}

onClick(){
  console.log('This is a debug message from a button')
}

// I am here ATM: https://youtu.be/3dHNOWTI7H8?t=1700

}
