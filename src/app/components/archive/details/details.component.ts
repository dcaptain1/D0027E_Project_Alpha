import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientService } from 'src/app/service/http-client.service';
import { Image } from 'src/app/model/Image';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {

  @Input()
  image: Image;


  constructor(private router: Router, private httpClientService: HttpClientService) { }


 
}

