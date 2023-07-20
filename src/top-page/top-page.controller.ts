import { Body, Controller, Delete, Get, Param, Post, Patch, HttpCode } from '@nestjs/common';
import { TopPageModule } from './top-page.module';
import { FindTopPageDto } from './dto/find-top-page.dto';
import { ConfigService } from '@nestjs/config';

@Controller('top-page')
export class TopPageController {
	constructor(private readonly configService: ConfigService) {}
	@Post('create')
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	async create(@Body() dto: Omit<TopPageModule, '_id'>): Promise<any> {}

	@Get('id')
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	async get(@Param('id') id: string): Promise<string | undefined> {
		return this.configService.get<string>('DATABASE_USER');
	}

	@Delete('id')
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	async delete(@Param('id') id: string): Promise<void> {}

	@Patch('id')
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	async patch(@Param('id') id: string, @Body() dto: TopPageModule): Promise<void> {}

	@HttpCode(200)
	@Post()
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	async find(@Body() dto: FindTopPageDto): Promise<void> {}
}
