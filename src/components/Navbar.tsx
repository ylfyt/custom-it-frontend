import { FunctionComponent } from 'react';

interface NavBarProps {}

const NavBar: FunctionComponent<NavBarProps> = () => {
	return (
		<div className="flex justify-between items-center">
			<div className="text-3xl font-bold">
				<div>Custom It</div>
			</div>
			<div className="flex gap-3 text-lg">
				<div>Home</div>
				<div>Cart</div>
				<div>Yudi Alfayat</div>
			</div>
		</div>
	);
};

export default NavBar;
