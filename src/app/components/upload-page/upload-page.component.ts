import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Image } from 'src/app/model/Image';
import { HttpClientService } from 'src/app/service/http-client.service';

@Component({
  selector: 'app-upload-page',
  templateUrl: './upload-page.component.html',
  styleUrls: ['./upload-page.component.css']
})
export class UploadPageComponent implements OnInit {


  images: Array<Image>;
  action: string;
  imagesRecieved: Array<Image>;
  selectedImage: any;
  



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
        // get the url parameter named action. this can either be add or view.
        this.action = params['action'];
	// get the parameter id. this will be the id of the book whose details
	// are to be displayed when action is view.
	const id = params['id'];
	// if id exists, convert it to integer and then retrive the book from
	// the books array
        if (id) {
          this.selectedImage = this.images.find(image => {
            return image.id === + id;
          });
        }
      }
    );
  }

  // we will be taking the books response returned from the database
  // and we will be adding the retrieved
  handleSuccessfulResponse(response: any) {
    this.images = new Array<Image>();
    //get books returned by the api call
    this.imagesRecieved = response;
    for (const image of this.imagesRecieved) {

      const imagewithRetrievedImageField = new Image();
      imagewithRetrievedImageField.id = image.id;
      imagewithRetrievedImageField.title = image.title;
      imagewithRetrievedImageField.description = image.description;
      imagewithRetrievedImageField.category = image.category;
      imagewithRetrievedImageField.tags= image.tags;
      //populate retrieved image field so that images can be displayed
      imagewithRetrievedImageField.retrievedImage = 'data:image/jpeg;base64,' + image.picByte;

      imagewithRetrievedImageField.price = image.price;
      imagewithRetrievedImageField.picByte = image.picByte;
      this.images.push(imagewithRetrievedImageField);
    }
  }

  addImage() {
    this.selectedImage = new Image();
    this.router.navigate(['Upload-page'], { queryParams: { action: 'add' } });
  }

}