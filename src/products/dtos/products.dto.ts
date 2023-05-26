import { IsString, IsNumber, IsUrl, IsNotEmpty, IsPositive } from "class-validator"
import { PartialType, ApiProperty } from "@nestjs/swagger"


export class CreateProductDto {
	@IsString()
	@IsNotEmpty()
	@ApiProperty({ description: "the name of product"})
	readonly name: string;
	
	@IsString()
	@IsNotEmpty()
	@ApiProperty({ description: "the description of product" })
	readonly description: string;
	
	@IsNumber()
	@IsNotEmpty()
	@IsPositive()
	@ApiProperty({ description: "the price of product"})
	readonly price: number;
	
	@IsNumber()
	@IsNotEmpty()
	@IsPositive()
	@ApiProperty({ description: "the stock of product"})
	readonly stock: number;
	
    @IsUrl()
    @IsNotEmpty()
    @ApiProperty({ description: "the image of product"})
	readonly image: string;
}

export class UpdateProductDto extends PartialType(CreateProductDto) {}