import { Injectable } from '@angular/core';
import { Book } from '../model/Book';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient: HttpClient) { }



  getBooks() {
    return this.httpClient.get<Book[]>('http://localhost:8091/books/get');
  }

  addBook(newBook: Book) {
    return this.httpClient.post<Book>('http://localhost:8091/books/add', newBook);
  }
}


