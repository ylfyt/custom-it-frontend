import { FunctionComponent } from 'react';
import ProductDetail from '../components/ProductDetail';
import { IProduct } from '../interfaces';
import { useParams } from 'react-router-dom';

interface ProductProps {}

const Product: FunctionComponent<ProductProps> = () => {
	const product: IProduct = {
		id: '12',
		name: 'Custom keyboard',
		description: 'Custom mechanical keyboard gateron',
		price: 600000,
		stock: 10,
		storeId: '1',
		image: 'https://i.picsum.photos/id/46/200/200.jpg?hmac=lUGWM3WNJB0TQ-OXq3KI1x-TPgKIuViXG4lKHiCGbao',
	};

	const params = useParams();
	console.log(params.productId);

	return <div>{!product ? <p>Loading...</p> : <ProductDetail product={product} />}</div>;
};

export default Product;
