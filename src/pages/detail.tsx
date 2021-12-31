import { FunctionComponent } from 'react';
import ProductDetail from '../components/ProductDetail';
import { IProduct } from '../interfaces';

interface DetailProps {}

const Detail: FunctionComponent<DetailProps> = () => {
	const product: IProduct = {
		id: '12',
		name: 'Custom keyboard',
		description: 'Custom mechanical keyboard gateron',
		price: 600000,
		storeId: '1',
		image: 'https://i.picsum.photos/id/46/200/200.jpg?hmac=lUGWM3WNJB0TQ-OXq3KI1x-TPgKIuViXG4lKHiCGbao',
	};

	return (
		<div>
			<ProductDetail product={product} />
		</div>
	);
};

export default Detail;
