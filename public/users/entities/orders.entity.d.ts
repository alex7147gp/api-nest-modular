import { User } from "./users.entity";
import { Product } from "./../../products/entities/products.entity";
export declare class Order {
    date: Date;
    user: User;
    products: Product[];
}
