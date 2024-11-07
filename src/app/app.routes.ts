import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {path: '',component: HomeComponent},
    {path: 'view-product',component: ViewProductComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}