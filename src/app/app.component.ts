import { Component } from '@angular/core';
import { RouterOutlet,RouterLink } from '@angular/router';
import { HeaderComponent } from "./common/header/header.component";
import { HomeComponent } from "./home/home.component";
import { FooterComponent } from "./common/footer/footer.component";
import { ViewProductComponent } from './view-product/view-product.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, HomeComponent, FooterComponent,ViewProductComponent,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'shopping-app';
}
