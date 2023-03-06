"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const products_model_1 = require("./products.model");
let ProductsService = class ProductsService {
    constructor() {
        this.products = [];
    }
    insertProducts(title, desc, price) {
        const id = Math.random().toString();
        const newProduct = new products_model_1.Products(id, title, desc, price);
        this.products.push(newProduct);
        return "Added Successfully into the products";
    }
    getProducts() {
        return [...this.products];
    }
    getSingleProducts(productId) {
        const product = this.findProducts(productId)[0];
        return Object.assign({}, product);
    }
    updateTheProducts(prodId, title, desc, price) {
        const [product, index] = this.findProducts(prodId);
        const updatedProduct = Object.assign({}, product);
        console.log("Not updated ", this.updateTheProducts);
        if (title) {
            updatedProduct.title = title;
        }
        if (desc) {
            updatedProduct.desc = desc;
        }
        if (price) {
            updatedProduct.price = price;
        }
        this.products[index] = updatedProduct;
        console.log("updated", this.products[index]);
        return this.products[index];
    }
    deleteProducts(prodId) {
        const index = this.findProducts(prodId)[1];
        this.products.splice(index, 1);
        return this.products;
    }
    findProducts(id) {
        const productIndex = this.products.findIndex(prod => prod.id === id);
        const product = this.products[productIndex];
        if (!product) {
            throw new common_1.NotFoundException("Product id not found");
        }
        return [product, productIndex];
    }
};
ProductsService = __decorate([
    (0, common_1.Injectable)()
], ProductsService);
exports.ProductsService = ProductsService;
//# sourceMappingURL=products.service.js.map