import { FC } from 'react';
import { IProductProps } from '../interfaces';

const ProductCard: FC<IProductProps> = ({ product }) => {
	return (
		<div className="ProductCard p-5 bg-gray-300 w-[200px]">
			<img src={product.image} alt={product.name} />
			<div>
				<div>{product.name}</div>
				<div>{product.price}</div>
			</div>
		</div>
	);
};

export default ProductCard;
