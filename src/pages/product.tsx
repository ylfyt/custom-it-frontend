import { FunctionComponent } from 'react';
import ProductDetail from '../components/ProductDetail';
import { useParams } from 'react-router-dom';
import { useProductBySlugQuery } from '../graphql/generated/graphql';

interface ProductProps {}

const Product: FunctionComponent<ProductProps> = () => {
	const params = useParams();
	const [{ data, fetching, error }] = useProductBySlugQuery({ variables: { productSlug: params.productSlug! } });

	return (
		<div>
			{fetching && <p>Loading...</p>}
			{!fetching && error && <p>Product Not Found</p>}
			{!fetching && data?.productBySlug && <ProductDetail product={data.productBySlug} />}
		</div>
	);
};

export default Product;
