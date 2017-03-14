import { Options } from 'ts-node/dist';
import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { Product } from './product';

@Injectable()
export class ProductService {

  private baseUrl = `http://lcboapi.com/products`;
  private baseUrl2 = `http://lcboapi.com/products?access_key=MDpiNzRjZDEyOC0wODIwLTExZTctYTM2Zi02MzA3MmU2NjE0MzQ6eXJNWTRVMkl4RTdXUkYyODNnVFdaQUVUVmVhVVp1ZDBpWVlz`;

  constructor(public http: Http) {
  }

  // getAll(): Observable<Product[]> {
  getAll() {

    const headers = new Headers({
      'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
      'Authorization': 'MDpiNzRjZDEyOC0wODIwLTExZTctYTM2Zi02MzA3MmU2NjE0MzQ6eXJNWTRVMkl4RTdXUkYyODNnVFdaQUVUVmVhVVp1ZDBpWVlz' });

    const options = new RequestOptions({ headers: headers });

    // return this.http.get(`${this.baseUrl}`, options)
    //            .map(res => res.json().result);

    return this.http.get(`${this.baseUrl2}`)
                    .map(res => res.json().result);
  }

  // private extractData(res: Response) {
  //   let body = res.json();
  //   return body.data || { };
  // }
}
