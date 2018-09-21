import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  newProducts: any;
  eName;
  eQuantity;
  ePrice;
  counter;
  constructor(private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {
    this.eName = "";
    this.ePrice = "";
    this.eQuantity = "";
    this.newProducts = {name: "", quantity: "", price: ""}
    this.counter = Math.floor(Math.random() * (1000)+1000);
  }

  createProduct() {
    let postData = {
      _id: this.counter,
      name: this.newProducts.name,
      quantity: this.newProducts.quantity,
      price: this.newProducts.price
    }

    let obs = this._httpService.createProducts(postData);
    obs.subscribe(data => {
      console.log(data);
      if(data['errors']) {
        this.eName = data['errors']['name'];
        this.eQuantity = data['errors']['quantity'];
        this.ePrice = data['errors']['price'];
      } else {
        this._router.navigate(['/products']);
      }
    })



  }


}
