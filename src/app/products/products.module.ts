import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// import { MaterialModule } from '@angular/material';
import { MaterialModule } from '@angular/material';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { DataTableModule, DropdownModule } from 'primeng/primeng';

import { ProductService } from './product.service';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsGridComponent } from './products-grid/products-grid.component';

const routes = [
  {
    path: 'list',
    component: ProductsListComponent
  },
  {
    path: 'grid',
    component: ProductsGridComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    NgxDatatableModule,
    DataTableModule,
    DropdownModule,
    MaterialModule,
    RouterModule.forRoot(routes),
  ],
  declarations: [ProductsListComponent, ProductsGridComponent],
  providers: [ProductService]
})
export class ProductsModule { }
