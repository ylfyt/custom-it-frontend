import { FunctionComponent } from 'react';

interface WrapperProps {}

const Wrapper: FunctionComponent<WrapperProps> = ({ children }) => {
	return <div className="px-[75px] pt-5">{children}</div>;
};

export default Wrapper;
