import { FunctionComponent } from 'react';

interface CommentProps {}

const Comment: FunctionComponent<CommentProps> = () => {
	return (
		<div className="mt-5 p-2 bg-gray-300">
			<div className="flex items-center">
				<div className="font-bold">Yudi Alfayat</div>
				<div className="px-2">-</div>
				<div className="text-sm">3 Januari 2021, 11.30pm</div>
			</div>
			<div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem, vitae!</div>
		</div>
	);
};

export default Comment;
