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
let ProductsService = class ProductsService {
    constructor() {
        this.counterId = 1;
        this.products = [{
                id: 1,
                name: "product 1",
                description: "bla blaaaaa",
                price: 1234,
                stock: 1234,
                image: "image.com"
            }, {
                id: 12,
                name: "product 2",
                description: "bla blaaaaa",
                price: 1234,
                stock: 1234,
                image: "image.com"
            }
        ];
    }
    findAll() {
        return this.products;
    }
    findOne(id) {
        const product = this.products.find((item) => item.id === id);
        if (product) {
            return product;
        }
        throw new common_1.NotFoundException("product not found");
    }
    create(payload) {
        this.counterId = this.counterId + 1;
        const newProduct = Object.assign({ id: this.counterId }, payload);
        this.products.push(newProduct);
        return newProduct;
    }
    update(id, payload) {
        const product = this.products.find((item) => item.id === id);
        if (product) {
            const index = this.products.findIndex((item) => item.id === id);
            this.products[index] = Object.assign(Object.assign({}, product), payload);
            return this.products[index];
        }
        throw new common_1.NotFoundException("product not found");
    }
    delete(id) {
        const index = this.products.findIndex((item) => item.id === id);
        if (index === -1) {
            throw new common_1.NotFoundException("product not found");
        }
        this.products.splice(index, 1);
        return {
            message: `the product ${id} has been delete`
        };
    }
};
ProductsService = __decorate([
    (0, common_1.Injectable)()
], ProductsService);
exports.ProductsService = ProductsService;
//# sourceMappingURL=products.service.js.map