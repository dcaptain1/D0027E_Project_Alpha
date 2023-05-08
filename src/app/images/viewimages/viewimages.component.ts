import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Image } from 'src/app/model/Image';
import { HttpClientService } from 'src/app/service/http-client.service';

@Component({
  selector: 'app-viewimages',
  templateUrl: './viewimages.component.html',
  styleUrls: ['./viewimages.component.css']
})
export class ViewimagesComponent implements OnInit {

  @Input()
  image: Image;

  @Output()
  imageDeletedEvent = new EventEmitter();

  constructor(private httpClientService: HttpClientService, private router: Router
  ) { }

  ngOnInit() {
  }

  deleteImage() {
    this.httpClientService.deleteImage(this.image.id).subscribe(
      (image) => {
        this.imageDeletedEvent.emit();
        this.router.navigate(['images']);
      }
    );
  }

  editImage() {
    this.router.navigate(['images'], { queryParams: { action: 'edit', id: this.image.id } });
  }

}


