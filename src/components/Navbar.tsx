import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

interface NavBarProps {}

const NavBar: FunctionComponent<NavBarProps> = () => {
	return (
		<div className="flex justify-between items-center mb-5">
			<div className="text-3xl font-bold">
				<Link to="/">
					<div>Custom It</div>
				</Link>
			</div>
			<div className="flex gap-3 text-lg">
				<Link to="/">Home</Link>
				<div>Cart</div>
				<div>Yudi Alfayat</div>
			</div>
		</div>
	);
};

export default NavBar;
