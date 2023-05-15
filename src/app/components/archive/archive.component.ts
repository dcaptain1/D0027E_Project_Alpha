import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Image } from 'src/app/model/Image';
import { PopUpComponent } from 'src/app/pop-up/pop-up.component';
import { HttpClientService } from 'src/app/service/http-client.service';


@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {



  images: Array<Image>;
  imagesStored: Array<Image>;

  imagesRecieved: Array<Image>;
  selectedImage:any;
  action: string;



  cartImages: any;
  savedSearchKeyword: any;
  visibleImages: Image[];
  dialog: any;
  constructor(private router: Router, private activedRoute: ActivatedRoute,private httpClientService: HttpClientService) { }


  ngOnInit() {
    this.httpClientService.getImages().subscribe(
      response => this.handleSuccessfulResponse(response),
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
    //from localstorage retrieve the cart item
    let data = localStorage.getItem('cart');
    //if this is not null convert it to JSON else initialize it as empty
    if (data !== null) {
      this.cartImages = JSON.parse(data);
    } else {
      this.cartImages = [];
    }
  }

  // Search Engine
  searchByKeyword(searchKeyword: any){
    console.log("current: "+searchKeyword);
    this.savedSearchKeyword = searchKeyword;


    const buttonSearch = document.getElementById('buttonSearch') as HTMLButtonElement;
    buttonSearch.addEventListener('click', () => {
      //Töm listan..
      //this.imagesStored = [];
      this.imagesStored = new Array<Image>();


      // Your button click event handler code here
      console.log("CLICK! You are now searching for: "+this.savedSearchKeyword);
      console.log("===================================");




        //Sök kod här...





        for (let i = 0; i < this.images.length; i++) {
          //console.log (this.images[i].title);
          if (this.images[i].title.toString().includes(this.savedSearchKeyword) ) {
            //console.log("FOUND IMAGE: "+this.images[i].title);


            //Updatera synliga bilder här...




              const imagewithRetrievedImageField = new Image();
              imagewithRetrievedImageField.id = this.images[i].id;
              imagewithRetrievedImageField.title = this.images[i].title;
              //populate retrieved image field so that images can be displayed
              imagewithRetrievedImageField.retrievedImage = 'data:image/jpeg;base64,' + this.images[i].picByte;

              imagewithRetrievedImageField.price = this.images[i].price;
              imagewithRetrievedImageField.picByte = this.images[i].picByte;
              this.imagesStored.push(imagewithRetrievedImageField);




              for (let i = 0; i < this.imagesStored.length; i++) {
                console.log("Stored images: "+this.imagesStored[0].title);
              }


            break;





          }else{
            console.log("Nothing found....");
          }


        }


        //console.log(this.images[2].title);

    });



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

  detailsImage(id: number) {
    this.router.navigate(['Archive'], { queryParams: { id, action: 'view' } });
  }




}
