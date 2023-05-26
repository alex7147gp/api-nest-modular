import { Controller, Get, Param, Query } from '@nestjs/common';





@Controller('categories')
export class CategoriesController {
  @Get("filter")
  getCategoriesFilter(): string {
    return "i am a rute filter"
  }

  @Get(":id")
  getCategorie(@Param("id") categorieId: string) {
    return `the id of product is ${categorieId}`
  }

  @Get("")
  getCategories(@Query() params: any): Array<object>{
    const { limit = 100, offset = 50 } = params
    return [{"limit": limit}, {"offset": offset}]
  }
}
