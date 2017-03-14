import { Component, OnInit } from '@angular/core';

import { Product, Paging } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  products: Product[];
  paging: Paging = <Paging>{};
  count: number;
  limit = 20;
  offset = 0;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.page(1, 20);
  }

  onPage(event) {
    console.log('Page Event', event);
    this.page(event.offset, event.limit);
  }

  private page(offset, limit) {

    this.productService.getAll(offset, limit).subscribe(res => {
      this.products = res.result;
      this.paging = res.pager;
    });
  }

  onSort(event) {
    // event was triggered, start sort sequence
    console.log('Sort Event', event);

    // const sort = event.sorts[0];



    
    // // emulate a server request with a timeout
    // setTimeout(() => {
    //   const rows = [...this.rows];
    //   // this is only for demo purposes, normally
    //   // your server would return the result for
    //   // you and you would just set the rows prop
    //   const sort = event.sorts[0];
    //   rows.sort((a, b) => {
    //     return a[sort.prop].localeCompare(b[sort.prop]) * (sort.dir === 'desc' ? -1 : 1);
    //   });

    //   this.rows = rows;
    //   this.loading = false;
    // }, 1000);
  }
}
