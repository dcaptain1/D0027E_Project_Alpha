import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { UploadPageComponent } from './components/upload-page/upload-page.component';
import { ArchiveComponent } from './components/archive/archive.component';
import { LoginComponent } from './components/login/login.component';
import { RegisteraccountComponent } from './components/registeraccount/registeraccount.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BooksComponent } from './admin/books/books.component';
import { AddbookComponent } from './admin/books/addbook/addbook.component';



const appRoute: Routes= [
  //{path: "", component: HomeComponent},  //bad version av skicka till home
  {path: "", redirectTo: "Home", pathMatch: "full"}, // tom url skickar dig till home.
  {path: "Home", component: HomeComponent},
  {path: "About", component: AboutComponent},
  {path: "Contact", component: ContactComponent},
  {path: "Upload-page", component: UploadPageComponent},
  {path: "Archive", component: ArchiveComponent},
  {path: "login", component: LoginComponent},
  {path: "register", component: RegisteraccountComponent},
  { path: 'admin/books', component: BooksComponent }

]



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    UploadPageComponent,
    ArchiveComponent,
    LoginComponent,
    RegisteraccountComponent,
    BooksComponent,
    AddbookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoute),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
