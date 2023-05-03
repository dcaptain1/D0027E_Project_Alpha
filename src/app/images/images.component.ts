import { Component, OnInit } from '@angular/core';
import { Image } from '../model/Image';
import { HttpClientService } from '../service/http-client.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {

  images: Array<Image>;
  selectedImage: Image;
  action: string;

 

  constructor(private httpClientService: HttpClientService,
    private activedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.refreshData();
  }

  refreshData() {
    this.httpClientService.getImages().subscribe(
      response => this.handleSuccessfulResponse(response)
    );
    this.activedRoute.queryParams.subscribe(
      (params) => {
        this.action = params['action'];
      }
    );
  }

  handleSuccessfulResponse(response: any) {
    this.images = response;
  }

  addImage() {
    this.selectedImage = new Image();
    this.router.navigate(['images'], { queryParams: { action: 'add' } });
  }
}


