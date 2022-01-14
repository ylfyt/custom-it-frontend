import { FunctionComponent, useState } from 'react';
import { RegularProductFragment, useCreateCommentMutation } from '../graphql/generated/graphql';
import Comment from './Comment';

interface ProductDetailProps {
	product: RegularProductFragment;
}

const ProductDetail: FunctionComponent<ProductDetailProps> = ({ product }) => {
	const [{ fetching }, createComment] = useCreateCommentMutation();

	const [text, setText] = useState('');
	const [comments, setComments] = useState(product.comments);

	const handleSubmitComment = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const response = await createComment({
			data: {
				productId: product.id,
				text,
			},
		});
		setText('');

		if (response.data?.createComment !== null) {
			const comment = response.data?.createComment;
			setComments([...comments, comment!]);
			console.log('success');
		} else {
			// TODO: Send notif
			console.log('Some error');
		}
	};

	return (
		<div className="bg-gray-400 p-4">
			<div className="flex mb-5">
				<div className="bg-green-300 w-1/2">
					<img className="w-full" src={product.imageUrl} alt={product.name} />
				</div>
				<div className="w-1/2 ml-4 flex flex-col justify-between">
					<div className="flex flex-col justify-between h-full">
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
					<div>{product.store.name}</div>
					<div>{product.store.address}</div>
				</div>
				<div>
					<div>100 Likes</div>
				</div>
			</div>
			<div className="py-4">
				<hr />
			</div>
			<div className="">
				<form className="flex justify-between" onSubmit={handleSubmitComment}>
					<input
						type="text"
						className="mr-2 w-full p-1"
						placeholder="comment"
						value={text}
						onChange={(e) => {
							setText(e.target.value);
						}}
					/>

					<button type="submit" className="px-3 py-1 bg-yellow-50" disabled={text === '' && fetching}>
						Submit
					</button>
				</form>
				<div className="">
					{comments.map((comment, idx) => {
						comment = comments[comments.length - 1 - idx];
						return <Comment key={comment.id} comment={comment} />;
					})}
				</div>
			</div>
		</div>
	);
};

export default ProductDetail;
