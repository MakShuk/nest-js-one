import { ConfigService } from '@nestjs/config';
import { TypegooseModuleOptions } from 'nestjs-typegoose';

export const getMongoConfig = async (
	configService: ConfigService,
): Promise<TypegooseModuleOptions> => {
	return {
		uri: getMongoString(configService),
		...getMongoOptions(),
	};
};

const getMongoString = (configService: ConfigService): string => {
	const username = configService.get('MONGO_LOGIN');
	const password = configService.get('MONGO_PASSWORD');
	const host = configService.get('MONGO_HOST');
	const port = configService.get('MONGO_PORT');
	const defaultauthdb = configService.get('MONGO_AUTHDATABASE');
	//return `mongodb://${username}:${password}@${host}:${port}/${defaultauthdb}`;
	return `mongodb://${host}:${port}/${defaultauthdb}`;
};

//mongodb://[username:password@]host1[:port1][,...hostN[:portN]][/[defaultauthdb][?options]]

const getMongoOptions = (): Omit<TypegooseModuleOptions, 'uri'> => ({
	useNewUrlParser: true,
	useUnifiedTopology: true,
});
