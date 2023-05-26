import { ProductsService } from "./../services/products.service";
import { CreateProductDto, UpdateProductDto } from "../dtos/products.dto";
export declare class ProductsController {
    private productsService;
    constructor(productsService: ProductsService);
    getProductFilter(): string;
    getProduct(productId: number): import("../entities/products.entity").Product;
    getProducts(params: any): Object;
    createProduct(payload: CreateProductDto): object;
    updateProduct(id: number, payload: UpdateProductDto): Object;
    deleteProduct(id: number): Object;
}
