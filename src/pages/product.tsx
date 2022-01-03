import { FunctionComponent, useEffect, useState } from 'react';
import ProductDetail from '../components/ProductDetail';
import { IProduct } from '../interfaces';
import { useParams } from 'react-router-dom';
import { useProductQuery } from '../generated/graphql';

interface ProductProps {}

const Product: FunctionComponent<ProductProps> = () => {
	const params = useParams();
	const [product, setProduct] = useState<IProduct | null>(null);
	const [{ data, fetching }] = useProductQuery({ variables: { productId: params.productId! } });

	useEffect(() => {
		if (data) {
			setProduct(data.product);
		}
	}, [data]);

	return (
		<div>
			{fetching && <p>Loading...</p>}
			{!fetching && !product && <p>Failed to fetch</p>}
			{!fetching && product && <ProductDetail product={product} />}
		</div>
	);
};

export default Product;
