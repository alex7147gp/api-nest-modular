import { Controller, Get, Post, Put, Delete, Param, Query, Body, HttpStatus, HttpCode, Res } from '@nestjs/common';
import { Response } from "express"

import { ApiTags, ApiOperation } from "@nestjs/swagger"
import { ProductsService } from "./../services/products.service"

import { ParseIntPipe } from "../../common/parse-int/parse-int.pipe"

import { CreateProductDto, UpdateProductDto } from "../dtos/products.dto"





@ApiTags("products")
@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService){}
  
  @Get("filter")
  getProductFilter(): string {
    return "i am a rute filter"
  }

  @Get(":id")
  @ApiOperation({ summary: "return one product"})
  getProduct(@Param("id", ParseIntPipe) productId: number) {
    return this.productsService.findOne(productId)
  }

  @Get("")
  getProducts(@Query() params: any): Object {
    const { limit = 100, offset = 50 } = params
    //return [{"limit": limit}, {"offset": offset}]
    return this.productsService.findAll()
  }

  @Post("")
  createProduct(@Body() payload: CreateProductDto): object {
  	return this.productsService.create(payload)
  }

  @Put(":id")
  updateProduct(@Param("id") id: number, @Body() payload: UpdateProductDto): Object{
    return this.productsService.update(id, payload)
  }

  @Delete(":id")
  deleteProduct(@Param("id") id: number): Object{
  	return {
  		message: "product delete success",
  		product: id
  	}
  }
}
