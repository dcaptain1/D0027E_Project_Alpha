import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Image } from '../model/Image';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient: HttpClient) { }

  addImage(newImage: any) {
    return this.httpClient.post<Image>('http://localhost:8091/images/add', newImage);
  }

  getImages() {
    return this.httpClient.get<Image[]>('http://localhost:8091/images/get');
  }

  deleteImage(id: any) {
    return this.httpClient.delete<Image>('http://localhost:8091/images/' + id);
  }

  updateImage(updatedImage: Image) {
    return this.httpClient.put<Image>('http://localhost:8091/images/update', updatedImage);
  }
} 
