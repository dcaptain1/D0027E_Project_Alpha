import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Image } from 'src/app/model/Image';
import { HttpClientService } from 'src/app/service/http-client.service';

@Component({
  selector: 'app-addimages',
  templateUrl: './addimages.component.html',
  styleUrls: ['./addimages.component.css']
})
export class AddimagesComponent implements OnInit {

  @Input()
  image: Image;

  @Output()
  imageAddedEvent = new EventEmitter();

  private selectedFile: any;
  imgURL: any;

  constructor(private httpClientService: HttpClientService,
    private activedRoute: ActivatedRoute,
    private router: Router,
    private httpClient: HttpClient) { }

  ngOnInit() {
  }

  public onFileChanged(event: any) {
    console.log(event);
    this.selectedFile = event.target.files[0];

    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (event2) => {
      this.imgURL = reader.result;
    };

  }

  saveImage() {

    const uploadData = new FormData();
    uploadData.append('imageFile', this.selectedFile, this.selectedFile.name);
    this.selectedFile.imageName = this.selectedFile.name;

    this.httpClient.post('http://localhost:8091/images/upload', uploadData, { observe: 'response' })
      .subscribe((response) => {
        if (response.status === 200) {
          this.httpClientService.addImage(this.image).subscribe(
            (image: any) => {
              this.imageAddedEvent.emit();
              this.router.navigate(['images']);
            }
          );
          console.log('Image uploaded successfully');
        } else {
          console.log('Image not uploaded successfully');
        }
      }
      );
  }
}

