import { FC } from 'react';
import ProductCard from '../components/ProductCard';

const Home: FC = (props) => {
	const Products = [
		{
			_id: '12',
			name: 'Custom keyboard',
			description: 'Custom mechanical keyboard gateron',
			price: 600000,
			storeId: '1',
			image: 'https://i.picsum.photos/id/46/200/200.jpg?hmac=lUGWM3WNJB0TQ-OXq3KI1x-TPgKIuViXG4lKHiCGbao',
		},
		{
			_id: '13',
			name: 'Custom moodlamp',
			description: 'Beautiful moodlamp for night',
			price: 150000,
			storeId: '3',
			image: 'https://i.picsum.photos/id/46/200/200.jpg?hmac=lUGWM3WNJB0TQ-OXq3KI1x-TPgKIuViXG4lKHiCGbao',
		},
		{
			_id: '14',
			name: 'Custom Keycaps',
			description: 'Custom artisan keycaps',
			price: 60000,
			storeId: '1',
			image: 'https://i.picsum.photos/id/46/200/200.jpg?hmac=lUGWM3WNJB0TQ-OXq3KI1x-TPgKIuViXG4lKHiCGbao',
		},
	];

	return (
		<div className="Home">
			<h1>Home</h1>
			{Products.map((product) => {
				return <ProductCard product={product} key={product._id} />;
			})}
		</div>
	);
};

export default Home;
