import { FunctionComponent } from 'react';
import NavBar from './Navbar';

interface WrapperProps {}

const Wrapper: FunctionComponent<WrapperProps> = ({ children }) => {
	return (
		<div className="px-[75px] pt-5">
			<NavBar />
			{children}
		</div>
	);
};

export default Wrapper;
