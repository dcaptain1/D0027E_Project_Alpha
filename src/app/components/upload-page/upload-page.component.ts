import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-page',
  templateUrl: './upload-page.component.html',
  styleUrls: ['./upload-page.component.css']
})
export class UploadPageComponent implements OnInit {
  categories =[
    { id: 1, name: 'Entertainment' },
    { id: 2, name: 'News' },
    { id: 3, name: 'Politics' },
    { id: 4, name: 'Sports' },
    { id: 5, name: 'Culture' },
    { id: 6, name: 'Economy' },
    { id: 7, name: 'Nature' },
];

  constructor () {}

  ngOnInit() {
  }
}
