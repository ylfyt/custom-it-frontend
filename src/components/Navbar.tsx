import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { useMeQuery } from '../graphql/generated/graphql';

interface NavBarProps {}

const NavBar: FunctionComponent<NavBarProps> = () => {
	const [{ data, fetching, error }] = useMeQuery();

	return (
		<div className="flex justify-between items-center mb-5">
			<div className="text-3xl font-bold">
				<Link to="/">
					<div>Custom It</div>
				</Link>
			</div>
			<div className="flex gap-3 text-lg">
				{fetching ? (
					<p>Loading...</p>
				) : (
					<>
						{data?.me ? (
							<>
								<Link to="/">Home</Link>
								<div>Cart</div>
								<div>{data.me.username}</div>
							</>
						) : (
							<>
								{!error ? (
									<>
										<Link to="/">Home</Link>
										<Link to="/login">Login</Link>
										<Link to="/register">Register</Link>
									</>
								) : (
									<p>Something wrong!!!</p>
								)}
							</>
						)}
					</>
				)}
			</div>
		</div>
	);
};

export default NavBar;
