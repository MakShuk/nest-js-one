import { Body, Controller, Delete, Get, Param, Post, Patch, HttpCode } from '@nestjs/common';
import { ProductModel } from './product.model';
import { FindProductDto } from './dto/find-product.dto';

@Controller('product')
export class ProductController {
	@Post('create')
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	async create(@Body() dto: Omit<ProductModel, '_id'>): Promise<any> {
		return { id: 1 };
	}

	@Get(':id')
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	async get(@Param('id') id: string): Promise<void> {}

	@Delete('id')
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	async delete(@Param('id') id: string): Promise<void> {}

	@Patch(':id')
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	async patch(@Param('id') id: string, @Body() dto: ProductModel): Promise<void> {}

	@HttpCode(200)
	@Post()
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	async find(@Body() dto: FindProductDto): Promise<any> {
		return true;
	}
}
