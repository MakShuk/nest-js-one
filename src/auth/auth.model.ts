import { prop } from '@typegoose/typegoose';
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';

export interface AuthModel extends Base {}

export class AuthModel extends TimeStamps {
	@prop({ unique: true })
	emael: string;
	@prop()
	passwordHash: string;
}
