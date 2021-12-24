export interface IProductProps {
	product: {
		_id: string;
		name: string;
		description: string;
		price: number;
		storeId: string;
		image: string;
	};
}
