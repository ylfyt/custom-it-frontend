import { FunctionComponent, useEffect, useState } from 'react';
import ProductDetail from '../components/ProductDetail';
import { IProduct } from '../utils/interfaces';
import { useParams } from 'react-router-dom';
import { ProductQuery, useProductQuery } from '../generated/graphql';

interface ProductProps {}

const Product: FunctionComponent<ProductProps> = () => {
	const params = useParams();
	const [product, setProduct] = useState<ProductQuery['product'] | null>(null);
	const [{ data, fetching }] = useProductQuery({ variables: { productId: params.productId! } });

	useEffect(() => {
		if (data) {
			setProduct(data.product);
		}
	}, [data]);

	return (
		<div>
			{fetching && <p>Loading...</p>}
			{!fetching && !product && <p>Product Not Found</p>}
			{!fetching && product && <ProductDetail product={product} />}
		</div>
	);
};

export default Product;
