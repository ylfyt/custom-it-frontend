import { FunctionComponent } from 'react';
import { IProduct } from '../interfaces';

interface ProductDetailProps {
	product: IProduct;
}

const ProductDetail: FunctionComponent<ProductDetailProps> = ({ product }) => {
	return (
		<div className="bg-gray-400 p-4">
			<div className="flex mb-5">
				<div className="bg-green-300 w-1/2">
					<img className="w-full" src={product.image} alt={product.name} />
				</div>
				<div className="w-1/2 ml-4 flex flex-col justify-between">
					<div className="flex flex-col justify-between bg-red-400 h-full">
						<div className="">
							<div className="text-xl font-bold">{product.name}</div>
							<div className="text-base">{product.description}</div>
						</div>
						<div className="flex justify-between">
							<div className="">Stock: {product.stock}</div>
							<div className="text-xl">Rp. {product.price}</div>
						</div>
					</div>
					<div className="pt-4 flex items-center">
						<button className="bg-green-300 px-4 py-2 rounded-lg">Cart</button>
						<div className="px-4">
							<input className="p-1 w-1/2" type="number" placeholder="num" />
						</div>
					</div>
				</div>
			</div>
			<div className="flex justify-between items-center">
				<div className="">
					<div>Toko Jaya Selalu</div>
					<div>Jalan Ahmand Yani no 61, Payakumbuh</div>
				</div>
				<div>
					<div>100 Likes</div>
				</div>
			</div>
			<div className="py-4">
				<hr />
			</div>
			<div className="">
				<div className="flex justify-between">
					<input type="text" className="mr-2 w-full p-1" placeholder="comment" />
					<button className="px-3 py-1 bg-yellow-50">Submit</button>
				</div>
				<div className="">
					<div className="mt-5 p-2 bg-gray-300">
						<div className="flex items-center">
							<div className="font-bold">Yudi Alfayat</div>
							<div className="px-2">-</div>
							<div className="text-sm">3 Januari 2021, 11.30pm</div>
						</div>
						<div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem, vitae!</div>
					</div>
					<div className="mt-5 p-2 bg-gray-300">
						<div className="flex items-center">
							<div className="font-bold">Yudi Alfayat</div>
							<div className="px-2">-</div>
							<div className="text-sm">3 Januari 2021, 11.30pm</div>
						</div>
						<div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem, vitae!</div>
					</div>
					<div className="mt-5 p-2 bg-gray-300">
						<div className="flex items-center">
							<div className="font-bold">Yudi Alfayat</div>
							<div className="px-2">-</div>
							<div className="text-sm">3 Januari 2021, 11.30pm</div>
						</div>
						<div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem, vitae!</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductDetail;
