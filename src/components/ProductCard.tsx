import { FC } from 'react';

interface PropsInterface {
	product: {
		_id: string;
		name: string;
		description: string;
		price: number;
		storeId: string;
		image: string;
	};
}

const ProductCard: FC<PropsInterface> = (props) => {
	return (
		<div className="ProductCard w-[200rem]">
			<img src={props.product.image} alt={props.product.name} />
			<p>{props.product.name}</p>
		</div>
	);
};

export default ProductCard;
