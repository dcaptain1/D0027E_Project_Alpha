import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HttpClientService } from 'src/app/service/http-client.service';
import { Image } from 'src/app/model/Image';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-useraddimage',
  templateUrl: './useraddimage.component.html',
  styleUrls: ['./useraddimage.component.css']
})
export class UseraddimageComponent implements OnInit {

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
    //If there is no book id then it is an add book call else it is an edit book call
    if (this.image.id == null) {

      const uploadData = new FormData();
      uploadData.append('imageFile', this.selectedFile, this.selectedFile.name);
      this.selectedFile.imageName = this.selectedFile.name;

      this.httpClient.post('http://localhost:8091/images/upload', uploadData, { observe: 'response' })
        .subscribe((response) => {
          if (response.status === 200) {
            this.httpClientService.addImage(this.image).subscribe(
              (image) => {
                this.imageAddedEvent.emit();
                this.router.navigate(['Upload-page']);
              }
            );
            console.log('Image uploaded successfully');
          } else {
            console.log('Image not uploaded successfully');
          }
        }
        );
    } else {
      this.httpClientService.updateImage(this.image).subscribe(
        (image) => {
          this.imageAddedEvent.emit();
          this.router.navigate(['Upload-page']);
        }
      );
    }

  }

}

