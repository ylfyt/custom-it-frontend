import { FunctionComponent } from 'react';
import { useParams } from 'react-router-dom';

interface UserProps {}

interface UserParams {
	username: string;
}

const User: FunctionComponent<UserProps> = () => {
	const params = useParams();
	const username = params.username;

	return (
		<div>
			<div>{username}</div>
		</div>
	);
};

export default User;
