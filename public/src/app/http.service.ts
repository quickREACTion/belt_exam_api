import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getProducts() {
    return this._http.get('/api/products');
  }

  getSpecificProduct(id) {
    return this._http.get('/api/specproducts/' + id);
  }

  createProducts(data) {
    return this._http.post('/api/products', data);
  }

  updateProduct(id, data) {
    return this._http.put('/api/products/' + id, data);
  } 

  deleteProduct(id) {
    return this._http.delete('/api/products/' + id);
  }



}
