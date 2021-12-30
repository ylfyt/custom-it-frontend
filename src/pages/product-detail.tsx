import { FunctionComponent } from 'react';

interface ProductDetailProps {}

const ProductDetail: FunctionComponent<ProductDetailProps> = () => {
	const product = {
		_id: '12',
		name: 'Custom keyboard',
		description: 'Custom mechanical keyboard gateron',
		price: 600000,
		storeId: '1',
		image: 'https://i.picsum.photos/id/46/200/200.jpg?hmac=lUGWM3WNJB0TQ-OXq3KI1x-TPgKIuViXG4lKHiCGbao',
	};

	return (
		<div className="flex bg-gray-400 p-4">
			<div className="bg-green-300 w-1/2">
				<img className="w-full" src={product.image} alt={product.name} />
			</div>
			<div className="ml-4">
				<h2 className="text-xl font-bold">{product.name}</h2>
				<div>{product.description}</div>
				<div>{product.price}</div>
			</div>
		</div>
	);
};

export default ProductDetail;
