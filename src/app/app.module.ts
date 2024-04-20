import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeBodyComponent } from './home-body/home-body.component';
import { ImageSliderComponent } from './home-body/image-slider/image-slider.component';
import { DatePipe } from '@angular/common';
import { ServiceBodyComponent } from './service-body/service-body.component';
import { PriestBodyComponent } from './priest-body/priest-body.component';
import { AboutBodyComponent } from './about-body/about-body.component';
import { GalleryBodyComponent } from './gallery-body/gallery-body.component';
import { ContactBodyComponent } from './contact-body/contact-body.component';
import { Router, RouterModule, Routes } from '@angular/router';

const appRoutes: Routes=[
  {
    path:'',component:HomeBodyComponent
  },
  {
    path:'services',component:ServiceBodyComponent 
  },
  {
    path:'priest',component:PriestBodyComponent 
  },
  {
    path:'about',component:AboutBodyComponent
  },
  {
     path:'gallery',component:GalleryBodyComponent
  },
  {
    path:'contact',component:ContactBodyComponent
 }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeBodyComponent,
    ImageSliderComponent,
    ServiceBodyComponent,
    PriestBodyComponent,
    AboutBodyComponent,
    GalleryBodyComponent,
    ContactBodyComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ DatePipe],
  bootstrap: [AppComponent,HeaderComponent]
})
export class AppModule { }
