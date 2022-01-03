import { FC, useEffect, useState } from 'react';
import { useQuery } from 'urql';
import ProductCard from '../components/ProductCard';
import { Products } from '../db';
import { IProduct } from '../interfaces';

const ProductsQuery = `
query {
	products{
		id
		name
	}
}
`;

const Home: FC = (props) => {
	const [result, reexecuteQuery] = useQuery({ query: ProductsQuery });
	const [products, setProduct] = useState<IProduct[] | null>(null);

	const { data, fetching, error } = result;
	useEffect(() => {
		if (!fetching) {
			if (!error) {
				// console.log(data.products);
				setProduct(data.products);
			}
		}
	}, [error, fetching]);

	return (
		<div className="Home">
			{products === null ? (
				<p>Loading...</p>
			) : (
				<div className="flex gap-4 flex-wrap">
					{products.map((product) => {
						return <ProductCard product={product} key={product.id} />;
					})}
				</div>
			)}
		</div>
	);
};

export default Home;
