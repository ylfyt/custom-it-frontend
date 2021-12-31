import { FunctionComponent } from 'react';
import { IProduct } from '../interfaces';

interface ProductDetailProps {
	product: IProduct;
}

const ProductDetail: FunctionComponent<ProductDetailProps> = ({ product }) => {
	return (
		<div className="flex bg-gray-400 p-4">
			<div className="bg-green-300 w-1/2">
				<img className="w-full" src={product.image} alt={product.name} />
			</div>
			<div className="w-1/2 ml-4 flex flex-col justify-between">
				<div className="">
					<div className="text-xl font-bold">{product.name}</div>
					<div className="text-base">{product.description}</div>
				</div>
				<div className="px-10 flex justify-between">
					<div className="text-xl">Rp. {product.price}</div>
					<button className="bg-green-300 px-4 py-2 rounded-lg">Cart</button>
				</div>
			</div>
		</div>
	);
};

export default ProductDetail;
