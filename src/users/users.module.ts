import { Module } from '@nestjs/common';
import { CutomersController } from "./controllers/cutomers.controller"

import { UsersController } from "./controllers/users.controller"
import { OrdersController } from "./controllers/orders.controller"

import { CustomersService } from "./services/customers.service"
import { UsersService } from "./services/users.service"
import { OrdersService } from './services/orders.service';

import { ProductsModule } from "../products/products.module"

@Module({
	imports: [ProductsModule],
	controllers: [CutomersController, UsersController, OrdersController],
	providers: [CustomersService, UsersService, OrdersService]
})
export class UsersModule {}
