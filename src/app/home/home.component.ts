import { Component } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { provideAnimations } from '@angular/platform-browser/animations';
import {NgFor, NgForOf} from "@angular/common";
import { CommonModule } from '@angular/common';  
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselModule,NgFor,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  providers: [
    provideAnimations()
  ]
})

export class HomeComponent {

  images = [
    {
      image: "/assets/landingImage/1.png",
      id: "1"

    }, {
      image: "/assets/landingImage/2.png",
      id: "2"
    },
  ]
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 1000,
    navText: ['Next', 'Prev'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  }
 
}
