import { Module } from '@nestjs/common';
import { ProductsController } from "./controllers/products.controller"

import { CategoriesController } from "./controllers/categories.controller"
import { BrandsController } from "./controllers/brands.controller"

import { ProductsService } from "./services/products.service"
import { CategoriesService } from "./services/categories.service"
import { BrandsService } from "./services/brands.service"
// create import { OrdersService } from "./services/orders.service"


@Module({
	controllers: [ProductsController, CategoriesController, BrandsController],
	providers: [ProductsService, CategoriesService, BrandsService],
    exports: [ProductsService]
})

export class ProductsModule {}
