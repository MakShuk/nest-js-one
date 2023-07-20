import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { AuthDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
	@Post('register')
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	async register(@Body() dto: AuthDto): Promise<void> {}

	@HttpCode(200)
	@Post('login')
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	async login(@Body() dto: AuthDto): Promise<void> {}
}
