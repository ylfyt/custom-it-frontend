import { FunctionComponent } from 'react';
import { IComment } from '../utils/interfaces';
import { convertTimestampToDatetime } from '../utils/convertTimestampToDatetime';

interface CommentProps {
	comment: IComment;
}

const Comment: FunctionComponent<CommentProps> = ({ comment }) => {
	const date = convertTimestampToDatetime(comment.createAt);

	return (
		<div className="mt-5 p-2 bg-gray-300">
			<div className="flex items-center">
				<div className="font-bold">{comment.user.username}</div>
				<div className="px-2">-</div>
				<div className="text-sm">{date}</div>
			</div>
			<div>{comment.text}</div>
		</div>
	);
};

export default Comment;
