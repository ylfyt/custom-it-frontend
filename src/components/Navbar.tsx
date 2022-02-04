import { FunctionComponent, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { RegularUserFragment, useLogoutMutation, useMeQuery } from '../graphql/generated/graphql';

interface NavBarProps {
	signal: boolean;
	toggleSignal: (val: boolean) => void;
}

const NavBar: FunctionComponent<NavBarProps> = ({ signal, toggleSignal }) => {
	const [{ data, fetching, error }, reMe] = useMeQuery();
	const [{ fetching: fetchingLogout }, logout] = useLogoutMutation();
	const [user, setUser] = useState<RegularUserFragment | null>(null);

	useEffect(() => {
		if (signal) {
			reMe({ requestPolicy: 'network-only' });
		}
		if (!fetching) {
			toggleSignal(false);
		}
		if (typeof data === 'undefined') {
			setUser(null);
		} else {
			setUser(data.me!);
		}
	}, [signal, data]);

	const handleLogoutButton = async () => {
		const response = await logout();
		if (response.data?.logout) {
			setUser(null);
		}
	};

	return (
		<div className="flex justify-between items-center mb-5">
			<div className="text-3xl font-bold">
				<Link to="/">
					<div>Custom It</div>
				</Link>
			</div>
			<div className="flex gap-3 text-lg">
				{user ? (
					<>
						<Link to="/">Home</Link>
						<Link to="/store">Store</Link>
						<div>Cart</div>
						<button onClick={handleLogoutButton} disabled={fetchingLogout}>
							Logout
						</button>
						<Link to={'/user/' + user.username} className="bg-green-300 px-1">
							{user.username}
						</Link>
					</>
				) : (
					<>
						<Link to="/">Home</Link>
						<Link to="/login">Login</Link>
						<Link to="/register">Register</Link>
					</>
				)}
			</div>
		</div>
	);
};

export default NavBar;
