import { Component } from '@angular/core';

@Component({
  selector: 'app-view-product',
  standalone: true,
  imports: [],
  templateUrl: './view-product.component.html',
  styleUrl: './view-product.component.scss'
})
export class ViewProductComponent {


  ngOnInIt(): void{
    alert("hi")
  }
}
