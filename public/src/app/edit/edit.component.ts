import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  specificProduct;
  eName;
  eQuantity;
  ePrice;
  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this.specificProduct = "";
    this.eName = "";
    this.eQuantity = "";
    this.ePrice = "";
    this._route.params.subscribe((params: Params) => {
      this.getSpecificProduct(params['id']);
    })   
  }

  getSpecificProduct(id) {
    let obs = this._httpService.getSpecificProduct(id);
    obs.subscribe(data=> {
      this.specificProduct = data;
      console.log(this.specificProduct);
    })
  }

  updateProduct(id) {
    let postData = {
      name: this.specificProduct.name,
      quantity: this.specificProduct.quantity,
      price: this.specificProduct.price
    }
    let obs = this._httpService.updateProduct(id, postData);
    obs.subscribe(data => {
      if(data['errors']) {
        this.eName = data['errors']['name'];
        this.eQuantity = data['errors']['quantity'];
        this.ePrice = data['errors']['price']
      } else {
        this._router.navigate(['/']);
      }
    })

  }

  
  reset(id) {
    this.getSpecificProduct(id);
  }



}
