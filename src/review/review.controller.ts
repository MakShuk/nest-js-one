import {
	Body,
	Controller,
	Post,
	Delete,
	Param,
	Get,
	HttpException,
	HttpStatus,
} from '@nestjs/common';
import { ReviewModel } from './review.model';
import { CreateReviewDto } from './dto/create-review.dto';
import { ReviewService } from './review.service';
import { REVIEW_NOT_FOUND } from './review.constants';

@Controller('review')
export class ReviewController {
	constructor(private readonly reviewService: ReviewService) {}

	@Post('create')
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	async create(@Body() dto: CreateReviewDto): Promise<any> {
		return this.reviewService.create(dto);
	}

	@Delete(':id')
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	async delete(@Param('id') id: string, @Body() dto: ReviewModel): Promise<void> {
		const deletedDoc = await this.reviewService.delete(id);
		if (!deletedDoc) {
			throw new HttpException(REVIEW_NOT_FOUND, HttpStatus.NOT_FOUND);
		}
	}

	@Get('byPorduct/:productId')
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	async get(@Param('productId') productId: string): Promise<any> {
		return this.reviewService.findByProductId(productId);
	}
}
