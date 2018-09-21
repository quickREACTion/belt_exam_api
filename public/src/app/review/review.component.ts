import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  specificProduct;
  eDelete;
  eDeleteM;
  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this.specificProduct = "";
    this.eDeleteM = "";
    this._route.params.subscribe((params: Params) => {
      this.getSpecificProduct(params['id']);
    })
  }

  getSpecificProduct(id) {
    let obs = this._httpService.getSpecificProduct(id);
    obs.subscribe(data => {
      this.specificProduct = data;
      console.log(this.specificProduct);
    })
  }

  deleteSpecificProduct(id) {
    let obs = this._httpService.deleteProduct(id);
    if(this.specificProduct.quantity == 0) {
      obs.subscribe(data => {
        console.log(data);
        this._router.navigate(['/']);
      });
    } else if (this.specificProduct.quantity > 0) {
      this.eDeleteM = "to Delete this product, the Qty must be 0";
      this._router.navigate(['/products/' + id])
    }
  }

}
