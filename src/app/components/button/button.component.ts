import { Component,Input ,OnInit ,Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit{

@Input() text: string;
@Input() color: string;
@Output() btnClick = new EventEmitter();


constructor(){}

ngOnInit(): void {

}

onClick(){
  this.btnClick.emit();
}

// I am here ATM: https://youtu.be/3dHNOWTI7H8?t=1700

}
