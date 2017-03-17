import { Component, OnInit } from '@angular/core';
import { LazyLoadEvent } from 'primeng/primeng';

import { ProductService } from '../product.service';
import { Product, Paging } from '../product';

@Component({
  selector: 'app-products-grid',
  templateUrl: './products-grid.component.html',
  styleUrls: ['./products-grid.component.scss']
})
export class ProductsGridComponent implements OnInit {

  products: Product[];
  paging: Paging = <Paging>{};
  sort = 'limited_time_offer_savings_in_cents.desc.desc';
  query = '';
  liquors = [{label: 'Beer', value: 'Beer'}, {label: 'Wine', value: 'Wine'}, {label: 'Vodka', value: 'Vodka'}, {label: 'Whisky', value: 'Whisky'}];
  selectedLiquorType: string;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    // this.loadProducts();
  }

  loadProductsLazy(event: LazyLoadEvent) {

    //event.first = First row offset
    //event.rows = Number of rows per page
    //event.sortField = Field name to sort with
    //event.sortOrder = Sort order as number, 1 for asc and -1 for dec
    //filters: FilterMetadata object having field as key and filter value, filter matchMode as value

    const order: string = event.sortOrder === 1 ? 'asc' : 'desc';

    if (event.sortField === undefined) {
      this.getProducts(event.first + 1, event.rows, 'limited_time_offer_savings_in_cents.desc', this.query);
      return;
    }

    this.sort = `${event.sortField}.${order}`;
    this.getProducts(event.first + 1, event.rows, this.sort, this.query);
  }

  filter(event) {
    this.query =  event.target.value;
    this.getProducts(this.paging.current_page, this.paging.records_per_page, this.sort, this.query);
  }

  private getProducts(page: number = 1,
                       pageSize: number = 100,
                       sort: string = 'limited_time_offer_savings_in_cents.desc',
                       query: string = '') {

    this.productService.getAll(page, pageSize, sort, query).subscribe(res => {
      this.products = res.result;
      this.paging = res.pager;
    });
  }
}
