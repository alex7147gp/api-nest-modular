import { ConfigService } from "@nestjs/config";
import { User } from '../entities/users.entity';
import { Order } from "../entities/orders.entity";
import { CreateUserDto, UpdateUserDto } from '../dtos/user.dto';
import { ProductsService } from "./../../products/services/products.service";
export declare class UsersService {
    private productsService;
    private configService;
    constructor(productsService: ProductsService, configService: ConfigService);
    private counterId;
    private users;
    findAll(): User[];
    findOne(id: number): User;
    create(data: CreateUserDto): {
        email: string;
        password: string;
        role: string;
        id: number;
    };
    update(id: number, changes: UpdateUserDto): User;
    remove(id: number): boolean;
    findOrder(id: number): Order;
}
