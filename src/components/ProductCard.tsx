import { FC } from 'react';
import { Link } from 'react-router-dom';
import { RegularProductsFragment } from '../graphql/generated/graphql';

interface ProductCardProps {
	product: RegularProductsFragment;
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
	return (
		<Link to={'/product/' + product.slug}>
			<div className="ProductCard p-5 bg-gray-300 w-[200px] min-h-[310px]">
				<img src={product.imageUrl} alt={product.name} />
				<div>
					<div>{product.name}</div>
					<div>{product.price}</div>
				</div>
			</div>
		</Link>
	);
};

export default ProductCard;
