import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// import { MaterialModule } from '@angular/material';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { ProductService } from './product.service';
import { ProductsListComponent } from './products-list/products-list.component';

const routes = [
  {
    path: '',
    component: ProductsListComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    NgxDatatableModule,
    // MaterialModule,
    RouterModule.forRoot(routes),
  ],
  declarations: [ProductsListComponent],
  providers: [ ProductService ]
})
export class ProductsModule { }
