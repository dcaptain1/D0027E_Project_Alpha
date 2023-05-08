import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Image } from 'src/app/model/Image';
import { HttpClientService } from 'src/app/service/http-client.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {

  images: Array<Image>;
  imagesRecieved: Array<Image>;


  cartImages: any;

  constructor(private router: Router, private httpClientService: HttpClientService) { }


  ngOnInit() {
    this.httpClientService.getImages().subscribe(
      response => this.handleSuccessfulResponse(response),
    );
    //from localstorage retrieve the cart item
    let data = localStorage.getItem('cart');
    //if this is not null convert it to JSON else initialize it as empty
    if (data !== null) {
      this.cartImages = JSON.parse(data);
    } else {
      this.cartImages = [];
    }
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
      //populate retrieved image field so that images can be displayed
      imagewithRetrievedImageField.retrievedImage = 'data:image/jpeg;base64,' + image.picByte;

      imagewithRetrievedImageField.price = image.price;
      imagewithRetrievedImageField.picByte = image.picByte;
      this.images.push(imagewithRetrievedImageField);
    }
  }

  addToCart(imageId: any) {
    //retrieve book from books array using the book id
    let image = this.images.find(image => {
      return image.id === +imageId;
    });
    let cartData = [];
    //retrieve cart data from localstorage
    let data = localStorage.getItem('cart');
    //prse it to json
    if (data !== null) {
      cartData = JSON.parse(data);
    }
    // add the selected book to cart data
    cartData.push(image);
    //updated the cartBooks
    this.updateCartData(cartData);
    //save the updated cart data in localstorage
    localStorage.setItem('cart', JSON.stringify(cartData));
    //make the isAdded field of the book added to cart as true
    //image.isAdded = true;
  }

  updateCartData(cartData: any) {
    this.cartImages = cartData;
  }

  goToCart() {
    this.router.navigate(['/cart']);
  }

  emptyCart() {
    this.cartImages = [];
    localStorage.clear();
  }

}


