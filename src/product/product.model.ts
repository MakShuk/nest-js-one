export class ProductModel {
	_id: number;
	image: string;
	title: string;
	price: number;
	oldPrice: number;
	credit: number;
	calcRating: number;
	description: string;
	advantages: string;
	disAdvantages: string;
	categories: string[];
	tegs: string;
	characteristics: {
		[key: string]: string;
	};
}
