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



const appRoute: Routes= [
  //{path: "", component: HomeComponent},  //bad version av skicka till home
  {path: "", redirectTo: "Home", pathMatch: "full"}, // tom url skickar dig till home.
  {path: "Home", component: HomeComponent},
  {path: "About", component: AboutComponent},
  {path: "Contant", component: ContactComponent},
  {path: "Upload-page", component: UploadPageComponent},
  {path: "Archive", component: ArchiveComponent}
]



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    ContactComponent,
    UploadPageComponent,
    ArchiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
