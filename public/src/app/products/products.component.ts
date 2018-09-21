import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products;
  constructor(private _httpService: HttpService) { }
  
  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    let obs = this._httpService.getProducts();
    obs.subscribe(data => {
      this.products = data;
    })
  }

}
