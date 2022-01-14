import { FC } from 'react';
import ProductCard from '../components/ProductCard';
import { useProductsQuery } from '../graphql/generated/graphql';

const Home: FC = () => {
	const [{ data, fetching, error }] = useProductsQuery();

	return (
		<div className="Home">
			{fetching && <p>Loading...</p>}
			{!fetching && error && <p>Failed to fetch</p>}
			{!fetching && data?.products && (
				<div className="flex gap-4 flex-wrap">
					{data.products.length === 0 ? (
						<p>No Product</p>
					) : (
						data?.products.map((product) => {
							return <ProductCard product={product} key={product.id} />;
						})
					)}
				</div>
			)}
		</div>
	);
};

export default Home;
