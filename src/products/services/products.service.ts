import { Injectable, NotFoundException } from '@nestjs/common';


import { Product } from "./../entities/products.entity"
import { CreateProductDto, UpdateProductDto } from "../dtos/products.dto"

@Injectable()
export class ProductsService {

	private counterId = 1
	private products: Product[] = [{
		id: 1,
		name: "product 1",
		description: "bla blaaaaa",
		price: 1234,
		stock: 1234,
		image: "image.com"
	},{
		id: 12,
		name: "product 2",
		description: "bla blaaaaa",
		price: 1234,
		stock: 1234,
		image: "image.com"
	}
	]

	findAll() {
		return this.products
	}

	findOne(id: number) {
		const product = this.products.find((item) => item.id === id)
	    
	    if (product) {
          return product
	    }

	    throw new NotFoundException("product not found")
	}

	create(payload: CreateProductDto) {
		this.counterId = this.counterId + 1
		const newProduct = {
			id: this.counterId,
			...payload
		}

		this.products.push(newProduct)
		return newProduct
	}

	update(id: number, payload: UpdateProductDto) {
		const product = this.products.find((item) => item.id === id)

		if (product) {
          const index = this.products.findIndex((item) => item.id === id)
          this.products[index] = {
          	...product,
          	...payload
          }
          return this.products[index]
		}
		throw new NotFoundException("product not found")
	}

	delete(id: number) {
		const index = this.products.findIndex((item) => item.id === id)

        if (index === -1) {

          throw new NotFoundException("product not found")

        }

        this.products.splice(index, 1)
          return {
          	message: `the product ${id} has been delete`
        }

	}

}
