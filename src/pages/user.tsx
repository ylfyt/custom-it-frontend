import { FunctionComponent, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useMeQuery } from '../graphql/generated/graphql';

interface UserProps {}

interface UserParams {
	username: string;
}

const User: FunctionComponent<UserProps> = () => {
	const [{ data, fetching, error }, reMe] = useMeQuery();
	const params = useParams();

	const username = params.username;

	useEffect(() => {
		if (!fetching) {
			if (data?.me) {
				if (data.me.username !== username) {
					console.log("It's not youu");
				} else {
					console.log('Hello');
				}
			}
		}
	}, [fetching]);

	return (
		<div>
			<div>{username}</div>
		</div>
	);
};

export default User;
