import { FunctionComponent, useState } from 'react';
import { useRegisterMutation } from '../graphql/generated/graphql';

interface RegisterProps {}

const Register: FunctionComponent<RegisterProps> = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [validUsername, setValidUsername] = useState(false);
	const [validPassword, setValidPassword] = useState(false);
	const [{ fetching }, register] = useRegisterMutation();
	const [error, setError] = useState('');

	const handleUsernameChange = (val: string) => {
		setUsername(val);
		if (val === '') {
			setValidUsername(false);
			return;
		}
		setValidUsername(true);
	};
	const handlePasswordChange = (val: string) => {
		setPassword(val);
		if (val === '') {
			setValidPassword(false);
			return;
		}
		setValidPassword(true);
	};

	const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		setError('Loading...');
		const response = await register({
			data: {
				username,
				password,
			},
		});

		if (response.data?.register !== null) {
			setError('Success');
		} else {
			setError('Failed');
		}
	};

	return (
		<div className="flex flex-col justify-center items-center">
			<div className="bg-red-200 flex flex-col items-center w-[300px] p-5 rounded-lg shadow-md">
				<div className="text-2xl">Register</div>
				<div className="flex flex-col items-center ">
					<input type="text" className="w-[250px] mt-4 p-2 rounded-sm" placeholder="username" value={username} onChange={(e) => handleUsernameChange(e.target.value)} />
					<input type="password" className="w-[250px] mt-4 p-2 rounded-sm" placeholder="password" value={password} onChange={(e) => handlePasswordChange(e.target.value)} />
					<button className="mt-4 p-2 bg-green-300 rounded-lg shadow-md" onClick={(e) => handleSubmit(e)} disabled={!(validUsername && validPassword && !fetching)}>
						Submit
					</button>
				</div>
				<div>{error}</div>
			</div>
		</div>
	);
};

export default Register;