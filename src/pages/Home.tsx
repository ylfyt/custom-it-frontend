import { FC, useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { IProduct } from '../utils/interfaces';
import { useProductsQuery } from '../generated/graphql';

const Home: FC = () => {
	const [{ data, fetching, error }] = useProductsQuery();
	const [products, setProducts] = useState<IProduct[] | null>(null);

	useEffect(() => {
		if (data) {
			setProducts(data.products);
		}
	}, [data]);

	return (
		<div className="Home">
			{fetching && <p>Loading...</p>}
			{!fetching && !products && <p>Failed to fetch</p>}
			{!fetching && products && (
				<div className="flex gap-4 flex-wrap">
					{data?.products.map((product) => {
						return <ProductCard product={product} key={product.id} />;
					})}
				</div>
			)}
		</div>
	);
};

export default Home;
