import { Component, OnInit } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { NgFor, NgForOf } from "@angular/common";
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselModule, NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})

export class HomeComponent implements OnInit {


  constructor(private _router: Router) { }

  images = [
    {
      image: "/assets/landingImage/1.png",
      id: "1"

    }, {
      image: "/assets/landingImage/2.png",
      id: "2"
    },
  ]

  productImages = [
    {
      image: "/assets/product_images/1.png",
      id: "1",
      name: "Red Chili Powder",
      actualPrice: "100",
      discountPrice: "80",
      discountPercent: "20%"
    }, {
      image: "/assets/product_images/2.png",
      id: "2",
      name: "Sirudhaniya puttu maavu",
      actualPrice: "80",
      discountPrice: "60",
      discountPercent: "25%"
    }, {
      image: "/assets/product_images/3.png",
      id: "3",
      name: "Small Onion Thalippu Vadagam",
      actualPrice: "60",
      discountPrice: "30",
      discountPercent: "50%"
    }, {
      image: "/assets/product_images/4.png",
      id: "4",
      name: "Sukku Malli Coffee Powder",
      actualPrice: "150",
      discountPrice: "130",
      discountPercent: "15%"
    }, {
      image: "/assets/product_images/5.png",
      id: "5",
      name: "Ready Idiyappam mix Flour",
      actualPrice: "180",
      discountPrice: "150",
      discountPercent: "10%"
    }, {
      image: "/assets/product_images/6.png",
      id: "6",
      name: "Kuzhambu Chili Powder",
      actualPrice: "235",
      discountPrice: "225",
      discountPercent: "3%"
    }, {
      image: "/assets/product_images/7.png",
      id: "7",
      name: "Kollu Idli Podi",
      actualPrice: "267",
      discountPrice: "247",
      discountPercent: "8%"
    }, {
      image: "/assets/product_images/8.png",
      id: "8",
      name: "Black Pepper Powder",
      actualPrice: "361",
      discountPrice: "349",
      discountPercent: "5%"
    }, {
      image: "/assets/product_images/9.png",
      id: "9",
      name: "Readymade Murukku Maavu",
      actualPrice: "246",
      discountPrice: "223",
      discountPercent: "12%"
    },
  ]

  catImages = [
    {
      image: "/assets/category_image/11.png",
      id: "1",
      name: "Red Chili Powder",
      actualPrice: "100",
      discountPrice: "80",
      discountPercent: "20%"
    }, {
      image: "/assets/category_image/12.png",
      id: "2",
      name: "Sirudhaniya puttu maavu",
      actualPrice: "80",
      discountPrice: "60",
      discountPercent: "25%"
    }, {
      image: "/assets/category_image/13.png",
      id: "3",
      name: "Small Onion Thalippu Vadagam",
      actualPrice: "60",
      discountPrice: "30",
      discountPercent: "50%"
    }, {
      image: "/assets/category_image/14.png",
      id: "4",
      name: "Sukku Malli Coffee Powder",
      actualPrice: "150",
      discountPrice: "130",
      discountPercent: "15%"
    }, {
      image: "/assets/category_image/15.png",
      id: "5",
      name: "Ready Idiyappam mix Flour",
      actualPrice: "180",
      discountPrice: "150",
      discountPercent: "10%"
    }, {
      image: "/assets/category_image/16.png",
      id: "6",
      name: "Kuzhambu Chili Powder",
      actualPrice: "235",
      discountPrice: "225",
      discountPercent: "3%"
    },
  ]

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 1000,
    navText: ['', ''],
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
    nav: false
  }
  customHotSalesOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 200,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 5
      },
      1200: {
        items: 6
      }
    },
    nav: true

  }

  ngOnInit(): void {

  }

  viewProduct(productId: any) {
    this._router.navigate(['/view-product'], { queryParams: { productId: productId } })
  }
  addToCart(productId: any) {
    alert(productId + "nane")
  }
}
