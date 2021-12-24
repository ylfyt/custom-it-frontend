import { FC } from 'react';
import ProductCard from '../components/ProductCard';
import { Products } from '../db';

const Home: FC = (props) => {
	const products = Products;
	return (
		<div className="Home">
			<h1>Home</h1>
			<div className="flex gap-4 flex-wrap">
				{products.map((product) => {
					return <ProductCard product={product} key={product._id} />;
				})}
			</div>
		</div>
	);
};

export default Home;
