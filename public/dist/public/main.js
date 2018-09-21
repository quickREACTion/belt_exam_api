(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./products/products.component */ "./src/app/products/products.component.ts");
/* harmony import */ var _new_new_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./new/new.component */ "./src/app/new/new.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/edit/edit.component.ts");
/* harmony import */ var _review_review_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./review/review.component */ "./src/app/review/review.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// const routes: Routes = [
//   {path: 'products', children: [
//     {path: "", pathMatch: 'full', component: ProductsComponent},
//     {path: 'new', component: NewComponent},
//     {path: 'edit/:id', component: EditComponent},
//     {path: 'review/:id', component: ReviewComponent},
//   ]},
//   {path: "**", redirectTo: "/products"}
// ];
var routes = [
    { path: 'products/new', component: _new_new_component__WEBPACK_IMPORTED_MODULE_3__["NewComponent"] },
    { path: 'products/:id/edit', component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_4__["EditComponent"] },
    { path: 'products/:id', component: _review_review_component__WEBPACK_IMPORTED_MODULE_5__["ReviewComponent"] },
    { path: '', pathMatch: 'full', component: _products_products_component__WEBPACK_IMPORTED_MODULE_2__["ProductsComponent"] },
    { path: '**', redirectTo: '/' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'public';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./products/products.component */ "./src/app/products/products.component.ts");
/* harmony import */ var _new_new_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./new/new.component */ "./src/app/new/new.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/edit/edit.component.ts");
/* harmony import */ var _review_review_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./review/review.component */ "./src/app/review/review.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _products_products_component__WEBPACK_IMPORTED_MODULE_7__["ProductsComponent"],
                _new_new_component__WEBPACK_IMPORTED_MODULE_8__["NewComponent"],
                _edit_edit_component__WEBPACK_IMPORTED_MODULE_9__["EditComponent"],
                _review_review_component__WEBPACK_IMPORTED_MODULE_10__["ReviewComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            ],
            providers: [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/edit/edit.component.css":
/*!*****************************************!*\
  !*** ./src/app/edit/edit.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\ninput[type=number]::-webkit-inner-spin-button, \r\ninput[type=number]::-webkit-outer-spin-button { \r\n  -webkit-appearance: none; \r\n  margin: 0; \r\n}\r\n\r\n.cfb {clear: both;}\r\n\r\nh1 {\r\n    margin-bottom: 5%;\r\n    margin-top: 1%;\r\n}\r\n\r\n.errorMessagediv p {\r\n    color: red\r\n}\r\n\r\n.FormMainLabelDiv {\r\n    float: left;\r\n    width: 100%;\r\n}\r\n\r\n.FormMainLabelh3 {\r\n    float: left;\r\n    width: 20%;\r\n}\r\n\r\n.FormMainLabelInputs {\r\n    width: 30%;\r\n    font-size: 20px;\r\n    padding: 0.5em;\r\n    margin-bottom: 2%;\r\n}\r\n\r\n.resetButton {\r\n    float: left;\r\n    background-color: #e1d5e7;\r\n    border-radius: 5px;\r\n    border: 1px solid lightgray;\r\n    padding: 1em 2em;\r\n    margin-left: 20%;\r\n    cursor: pointer;\r\n}\r\n\r\n.CreateButton {\r\n    float: left;\r\n    background-color: #99ff99;\r\n    border-radius: 5px;\r\n    border: 1px solid lightgray;\r\n    padding: 1em 2em;\r\n    margin-left: 20%;\r\n    margin-right: 3%;\r\n    cursor: pointer;\r\n}\r\n"

/***/ }),

/***/ "./src/app/edit/edit.component.html":
/*!******************************************!*\
  !*** ./src/app/edit/edit.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"container\">\n    <h1>Update Product</h1>\n  \n    <form (submit)=\"updateProduct(specificProduct._id)\">\n      <div class=\"FormMainLabelDiv\">\n        <div class=\"errorMessagediv\">\n          <h3 class=\"FormMainLabelh3\">Name</h3>\n          <p *ngIf=\"eName\">{{eName.message}}</p>\n          <p *ngIf=\"name.invalid && name.dirty\">Name requires a minimum of 3 characters!</p>\n          <input class=\"FormMainLabelInputs\" type=\"text\" name=\"name\" [(ngModel)]=\"specificProduct.name\" required minlength=\"3\" #name=\"ngModel\">\n        </div>\n        <div class=\"errorMessagediv\">\n          <h3 class=\"FormMainLabelh3\">Qty</h3>\n          <p *ngIf=\"eQuantity\">{{eQuantity.message}}</p>\n          <p *ngIf=\"quantity.invalid && quantity.dirty\">Quantity requires a minimum of 0 or greater</p>\n          <input class=\"FormMainLabelInputs\" type=\"number\" name=\"quantity\" [(ngModel)]=\"specificProduct.quantity\" required min=\"0\" #quantity=\"ngModel\">\n        </div>\n        <div class=\"errorMessagediv\">\n          <h3 class=\"FormMainLabelh3\">Price</h3>\n          <p *ngIf=\"ePrice\">{{ePrice.message}}</p>\n          <p *ngIf=\"price.invalid && price.dirty\">Price requires a minimum of 0 or greater!</p>\n          <input class=\"FormMainLabelInputs\" type=\"number\" name=\"price\" [(ngModel)]=\"specificProduct.price\" required min=\"0\" #price=\"ngModel\">\n        </div>\n      </div>\n      <input class=\"CreateButton\" *ngIf=\"name.valid && quantity.valid && price.valid\" type=\"submit\" name=\"submit\" value=\"UPDATE\">\n    </form>\n    <button class=\"resetButton\" (click)=\"reset(specificProduct._id)\">RESET</button>\n    \n    <div class=\"cfb\"></div>\n  \n  </div>"

/***/ }),

/***/ "./src/app/edit/edit.component.ts":
/*!****************************************!*\
  !*** ./src/app/edit/edit.component.ts ***!
  \****************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditComponent = /** @class */ (function () {
    function EditComponent(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
    }
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.specificProduct = "";
        this.eName = "";
        this.eQuantity = "";
        this.ePrice = "";
        this._route.params.subscribe(function (params) {
            _this.getSpecificProduct(params['id']);
        });
    };
    EditComponent.prototype.getSpecificProduct = function (id) {
        var _this = this;
        var obs = this._httpService.getSpecificProduct(id);
        obs.subscribe(function (data) {
            _this.specificProduct = data;
            console.log(_this.specificProduct);
        });
    };
    EditComponent.prototype.updateProduct = function (id) {
        var _this = this;
        var postData = {
            name: this.specificProduct.name,
            quantity: this.specificProduct.quantity,
            price: this.specificProduct.price
        };
        var obs = this._httpService.updateProduct(id, postData);
        obs.subscribe(function (data) {
            if (data['errors']) {
                _this.eName = data['errors']['name'];
                _this.eQuantity = data['errors']['quantity'];
                _this.ePrice = data['errors']['price'];
            }
            else {
                _this._router.navigate(['/']);
            }
        });
    };
    EditComponent.prototype.reset = function (id) {
        this.getSpecificProduct(id);
    };
    EditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! ./edit.component.html */ "./src/app/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.css */ "./src/app/edit/edit.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/http.service.ts":
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HttpService = /** @class */ (function () {
    function HttpService(_http) {
        this._http = _http;
    }
    HttpService.prototype.getProducts = function () {
        return this._http.get('/api/products');
    };
    HttpService.prototype.getSpecificProduct = function (id) {
        return this._http.get('/api/specproducts/' + id);
    };
    HttpService.prototype.createProducts = function (data) {
        return this._http.post('/api/products', data);
    };
    HttpService.prototype.updateProduct = function (id, data) {
        return this._http.put('/api/products/' + id, data);
    };
    HttpService.prototype.deleteProduct = function (id) {
        return this._http.delete('/api/products/' + id);
    };
    HttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/new/new.component.css":
/*!***************************************!*\
  !*** ./src/app/new/new.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\ninput[type=number]::-webkit-inner-spin-button, \r\ninput[type=number]::-webkit-outer-spin-button { \r\n  -webkit-appearance: none; \r\n  margin: 0; \r\n}\r\n\r\n.cfb {clear: both;}\r\n\r\nh1 {\r\n    margin-bottom: 5%;\r\n    margin-top: 1%;\r\n}\r\n\r\n.errorMessagediv p {\r\n    color: red\r\n}\r\n\r\n.FormMainLabelDiv {\r\n    float: left;\r\n    width: 100%;\r\n}\r\n\r\n.FormMainLabelh3 {\r\n    float: left;\r\n    width: 20%;\r\n}\r\n\r\n.FormMainLabelInputs {\r\n    width: 30%;\r\n    font-size: 20px;\r\n    padding: 0.5em;\r\n    margin-bottom: 2%;\r\n}\r\n\r\nform button {\r\n    background-color: #e1d5e7;\r\n    border-radius: 5px;\r\n    border: 1px solid lightgray;\r\n    padding: 1em 2em;\r\n    margin-left: 20%;\r\n    cursor: pointer !important;\r\n}\r\n\r\n.CreateButton {\r\n    background-color: #66bbff;\r\n    border-radius: 5px;\r\n    border: 1px solid lightgray;\r\n    padding: 1em 2em;\r\n    margin-left: 2%;\r\n    cursor: pointer !important;\r\n}\r\n"

/***/ }),

/***/ "./src/app/new/new.component.html":
/*!****************************************!*\
  !*** ./src/app/new/new.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"container\">\n  <h1>New Product</h1>\n\n  <form (submit)=\"createProduct()\">\n    <div class=\"FormMainLabelDiv\">\n    <div class=\"errorMessagediv\">\n      <h3 class=\"FormMainLabelh3\">Name</h3>\n      <p *ngIf=\"eName\">{{eName.message}}</p>\n      <p *ngIf=\"name.pristine\">Name is required</p>\n      <p *ngIf=\"name.invalid && name.dirty\">Name requires a minimum of 3 characters!</p>\n      <input class=\"FormMainLabelInputs\" type=\"text\" name=\"name\" [(ngModel)]=\"newProducts.name\" required minlength=\"3\" maxlength=\"255\" #name=\"ngModel\" autocomplete=\"off\">\n    </div>\n    <div class=\"errorMessagediv\">\n      <h3 class=\"FormMainLabelh3\">Qty</h3>\n      <p *ngIf=\"eQuantity\">{{eQuantity.message}}</p>\n      <p *ngIf=\"quantity.pristine\">Quantity is required</p>\n      <p *ngIf=\"quantity.invalid && quantity.dirty\">Quantity requires a minimum of 0 or greater</p>\n      <input class=\"FormMainLabelInputs\" type=\"number\" name=\"quantity\" [(ngModel)]=\"newProducts.quantity\" required min=\"0\" #quantity=\"ngModel\">\n    </div>\n    <div class=\"errorMessagediv\">\n      <h3 class=\"FormMainLabelh3\">Price</h3>\n      <p *ngIf=\"ePrice\">{{ePrice.message}}</p>\n      <p *ngIf=\"price.pristine\">Price is required</p>\n      <p *ngIf=\"price.invalid && price.dirty\">Price requires a minimum of 0 or greater!</p>\n      <input class=\"FormMainLabelInputs\" type=\"number\" name=\"price\" [(ngModel)]=\"newProducts.price\" required min=\"0\" #price=\"ngModel\">\n    </div>\n    </div>\n    <button [routerLink]=\"['/']\">BACK</button>\n    <input class=\"CreateButton\" *ngIf=\"name.valid && quantity.valid && price.valid\" type=\"submit\" name=\"submit\" value=\"CREATE\">\n\n  </form>\n\n\n</div>"

/***/ }),

/***/ "./src/app/new/new.component.ts":
/*!**************************************!*\
  !*** ./src/app/new/new.component.ts ***!
  \**************************************/
/*! exports provided: NewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewComponent", function() { return NewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewComponent = /** @class */ (function () {
    function NewComponent(_httpService, _router) {
        this._httpService = _httpService;
        this._router = _router;
    }
    NewComponent.prototype.ngOnInit = function () {
        this.eName = "";
        this.ePrice = "";
        this.eQuantity = "";
        this.newProducts = { name: "", quantity: "", price: "" };
        this.counter = Math.floor(Math.random() * (1000) + 1000);
    };
    NewComponent.prototype.createProduct = function () {
        var _this = this;
        var postData = {
            _id: this.counter,
            name: this.newProducts.name,
            quantity: this.newProducts.quantity,
            price: this.newProducts.price
        };
        var obs = this._httpService.createProducts(postData);
        obs.subscribe(function (data) {
            console.log(data);
            if (data['errors']) {
                _this.eName = data['errors']['name'];
                _this.eQuantity = data['errors']['quantity'];
                _this.ePrice = data['errors']['price'];
            }
            else {
                _this._router.navigate(['/products']);
            }
        });
    };
    NewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new',
            template: __webpack_require__(/*! ./new.component.html */ "./src/app/new/new.component.html"),
            styles: [__webpack_require__(/*! ./new.component.css */ "./src/app/new/new.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NewComponent);
    return NewComponent;
}());



/***/ }),

/***/ "./src/app/products/products.component.css":
/*!*************************************************!*\
  !*** ./src/app/products/products.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n#container {\r\n    width: 1008px;\r\n    margin: 2% auto;\r\n}\r\n\r\n.cfb {clear: both;}\r\n\r\n.headerMainDivProduct {\r\n    float: left;\r\n    width: 50%;\r\n    margin-bottom: 5%;\r\n}\r\n\r\n.headerMainDivAdd {\r\n    float: right;\r\n}\r\n\r\n.headerAddButton {\r\n    background: linear-gradient(to bottom, #bfd2c3, #536570);\r\n    padding: 0.5em 1em;\r\n    border: none;\r\n    border-radius: 5px;\r\n    color: white;\r\n    cursor: pointer !important;   \r\n}\r\n\r\ntable {\r\n    border-collapse: collapse;\r\n    border: 2px solid black;\r\n    width: 100%;\r\n}\r\n\r\ntable thead tr {\r\n    background-color: lightgray;\r\n    border-bottom: 2px solid black;\r\n}\r\n\r\ntable thead tr th {\r\n    padding: 1em;\r\n    text-align: left;\r\n    border-right: 2px solid black;\r\n}\r\n\r\ntable tbody tr {\r\n    border-right: 2px solid black;\r\n}\r\n\r\ntable tbody tr td {\r\n    border-right: 2px solid black;\r\n    padding: 1em !important;\r\n}\r\n\r\n.editButton {\r\n    background: linear-gradient(to bottom, #e5d2be, #536570);\r\n    padding: 1em;\r\n    border: none;\r\n    border-radius: 5px;\r\n    color: white;\r\n    margin-right: 5%;\r\n    cursor: pointer;\r\n}\r\n\r\n.detailsButton {\r\n    background: linear-gradient(to bottom, #d8b9ba, #536570);\r\n    padding: 1em;\r\n    border: none;\r\n    border-radius: 5px;\r\n    color: white;\r\n    cursor: pointer;\r\n}"

/***/ }),

/***/ "./src/app/products/products.component.html":
/*!**************************************************!*\
  !*** ./src/app/products/products.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"container\">\n  <div class=\"headerMainDivProduct\">\n    <h1>Product List</h1>\n  </div>\n\n  <div class=\"headerMainDivAdd\">\n    <button class=\"headerAddButton\" [routerLink]=\"['products/new']\">Add New Product</button>\n  </div>\n  <div class=\"cfb\"></div>\n  <table>\n    <thead>\n      <tr>\n        <th>Id</th>\n        <th>Name</th>\n        <th>Qty</th>\n        <th>Price</th>\n        <th>Actions</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let x of products\">\n        <td>{{x._id}}</td>\n        <td>{{x.name}}</td>\n        <td>{{x.quantity}}</td>\n        <td>{{x.price | currency:'$':false:'1.2-2'}}</td>\n        <td style=\"text-align: center;\"><button [routerLink]=\"['products/' + x._id + '/edit']\" class=\"editButton\">Edit</button><button [routerLink]=\"['products/' + x._id]\" class=\"detailsButton\">Details</button></td>\n      </tr>\n    </tbody>\n  </table>\n\n  <div class=\"cfb\"></div>\n\n</div>"

/***/ }),

/***/ "./src/app/products/products.component.ts":
/*!************************************************!*\
  !*** ./src/app/products/products.component.ts ***!
  \************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductsComponent = /** @class */ (function () {
    function ProductsComponent(_httpService) {
        this._httpService = _httpService;
    }
    ProductsComponent.prototype.ngOnInit = function () {
        this.getProducts();
    };
    ProductsComponent.prototype.getProducts = function () {
        var _this = this;
        var obs = this._httpService.getProducts();
        obs.subscribe(function (data) {
            _this.products = data;
        });
    };
    ProductsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-products',
            template: __webpack_require__(/*! ./products.component.html */ "./src/app/products/products.component.html"),
            styles: [__webpack_require__(/*! ./products.component.css */ "./src/app/products/products.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "./src/app/review/review.component.css":
/*!*********************************************!*\
  !*** ./src/app/review/review.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n.cfb {clear: both;}\r\n\r\nh1 {\r\n    margin-bottom: 5%;\r\n    margin-top: 1%;\r\n}\r\n\r\n.errorMessagediv p {\r\n    color: red\r\n}\r\n\r\n.FormMainLabelDiv {\r\n    float: left;\r\n    width: 100%;\r\n}\r\n\r\n.FormMainLabelh3 {\r\n    float: left;\r\n    width: 20%;\r\n}\r\n\r\n.FormMainLabelInputs {\r\n    width: 30%;\r\n    margin-bottom: 2%;\r\n}\r\n\r\n.backButton {\r\n    background-color: #e1d5e7;\r\n    border-radius: 5px;\r\n    border: 1px solid lightgray;\r\n    padding: 1em 2em;\r\n    margin-left: 20%;\r\n    cursor: pointer;\r\n}\r\n\r\n.deleteButton {\r\n    background-color: #ff0000;\r\n    border-radius: 5px;\r\n    border: 1px solid lightgray;\r\n    padding: 1em 2em;\r\n    margin-left: 5%;\r\n    cursor: pointer;\r\n}\r\n\r\n.deleteErrorMessage {\r\n    color: purple;\r\n    margin-bottom: 5%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/review/review.component.html":
/*!**********************************************!*\
  !*** ./src/app/review/review.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"container\">\n  <h1>Prduct Details</h1>\n\n  <p class=\"deleteErrorMessage\">{{eDeleteM}}</p>\n\n  <div class=\"FormMainLabelDiv\">\n    <div>\n      <p class=\"FormMainLabelh3\">Name</p>\n      <p class=\"FormMainLabelInputs\">{{specificProduct.name}}</p>\n    </div>\n\n    <div>\n      <p class=\"FormMainLabelh3\">Qty</p>\n      <p class=\"FormMainLabelInputs\">{{specificProduct.quantity}}</p>\n    </div>\n\n    <div>\n      <p class=\"FormMainLabelh3\">Price</p>\n      <p class=\"FormMainLabelInputs\">{{specificProduct.price | currency:'$':false:'1.2-2'}}</p>\n    </div>\n  </div>\n\n  <p><button class=\"backButton\" [routerLink]=\"['/']\">Back</button><button *ngIf=\"specificProduct.quantity == 0\" class=\"deleteButton\" (click)=\"deleteSpecificProduct(specificProduct._id)\">Delete</button></p>\n\n\n</div>"

/***/ }),

/***/ "./src/app/review/review.component.ts":
/*!********************************************!*\
  !*** ./src/app/review/review.component.ts ***!
  \********************************************/
/*! exports provided: ReviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewComponent", function() { return ReviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReviewComponent = /** @class */ (function () {
    function ReviewComponent(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
    }
    ReviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.specificProduct = "";
        this.eDeleteM = "";
        this._route.params.subscribe(function (params) {
            _this.getSpecificProduct(params['id']);
        });
    };
    ReviewComponent.prototype.getSpecificProduct = function (id) {
        var _this = this;
        var obs = this._httpService.getSpecificProduct(id);
        obs.subscribe(function (data) {
            _this.specificProduct = data;
            console.log(_this.specificProduct);
        });
    };
    ReviewComponent.prototype.deleteSpecificProduct = function (id) {
        var _this = this;
        var obs = this._httpService.deleteProduct(id);
        if (this.specificProduct.quantity == 0) {
            obs.subscribe(function (data) {
                console.log(data);
                _this._router.navigate(['/']);
            });
        }
        else if (this.specificProduct.quantity > 0) {
            this.eDeleteM = "to Delete this product, the Qty must be 0";
            this._router.navigate(['/products/' + id]);
        }
    };
    ReviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-review',
            template: __webpack_require__(/*! ./review.component.html */ "./src/app/review/review.component.html"),
            styles: [__webpack_require__(/*! ./review.component.css */ "./src/app/review/review.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ReviewComponent);
    return ReviewComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Chris Herrick\Desktop\Coding Dojo\Mean\Belt Exam\belt\belt_exam_api\public\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map