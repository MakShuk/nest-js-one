import { Body, Controller, Post, Delete, Param, Get } from '@nestjs/common';
import { ReviewModel } from './review.model';

@Controller('review')
export class ReviewController {
	@Post('create')
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	async create(@Body() dto: Omit<ReviewModel, '_id'>): Promise<void> {}

	@Delete(':id')
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	async delete(@Param('id') id: string, @Body() dto: ReviewModel): Promise<void> {}

	@Get('byPorduct/:productId')
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	async get(@Param('productId') productId: string): Promise<void> {}
}
