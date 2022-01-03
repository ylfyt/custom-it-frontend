import { FunctionComponent } from 'react';

interface RegisterProps {}

const Register: FunctionComponent<RegisterProps> = () => {
	return (
		<div className="flex flex-col justify-center items-center">
			<div className="bg-red-200 flex flex-col items-center w-[300px] p-5 rounded-lg shadow-md">
				<div className="text-2xl">Register</div>
				<div className="flex flex-col items-center ">
					<input type="text" className="w-[250px] mt-4 p-2 rounded-sm" placeholder="username" />
					<input type="text" className="w-[250px] mt-4 p-2 rounded-sm" placeholder="password" />
					<button className="mt-4 p-2 bg-gray-300 rounded-lg shadow-md">Submit</button>
				</div>
			</div>
		</div>
	);
};

export default Register;
