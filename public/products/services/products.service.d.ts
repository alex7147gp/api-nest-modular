import { Product } from "./../entities/products.entity";
import { CreateProductDto, UpdateProductDto } from "../dtos/products.dto";
export declare class ProductsService {
    private counterId;
    private products;
    findAll(): Product[];
    findOne(id: number): Product;
    create(payload: CreateProductDto): {
        name: string;
        description: string;
        price: number;
        stock: number;
        image: string;
        id: number;
    };
    update(id: number, payload: UpdateProductDto): Product;
    delete(id: number): {
        message: string;
    };
}
