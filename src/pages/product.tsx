import { FunctionComponent } from 'react';
import ProductDetail from '../components/ProductDetail';
import { useParams } from 'react-router-dom';
import { useProductQuery } from '../graphql/generated/graphql';

interface ProductProps {}

const Product: FunctionComponent<ProductProps> = () => {
	const params = useParams();
	const [{ data, fetching, error }] = useProductQuery({ variables: { productId: params.productId! } });

	return (
		<div>
			{fetching && <p>Loading...</p>}
			{!fetching && error && <p>Product Not Found</p>}
			{!fetching && data?.product && <ProductDetail product={data.product} />}
		</div>
	);
};

export default Product;
