import { FunctionComponent, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useLoginMutation } from '../graphql/generated/graphql';

interface LoginProps {
	toggleSignal: (val: boolean) => void;
}

const Login: FunctionComponent<LoginProps> = ({ toggleSignal }) => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [validUsername, setValidUsername] = useState(false);
	const [validPassword, setValidPassword] = useState(false);
	const [{ fetching }, login] = useLoginMutation();
	const [error, setError] = useState('');
	const navigate = useNavigate();

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

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setError('Loading...');
		const response = await login({
			data: {
				username,
				password,
			},
		});

		if (response.data?.login !== null) {
			setError('Success');
			toggleSignal(true);
			navigate('/');
		} else {
			setError('Failed');
		}
	};

	return (
		<div className="flex flex-col justify-center items-center">
			<div className="bg-red-200 flex flex-col items-center w-[300px] p-5 rounded-lg shadow-md">
				<div className="text-2xl">Login</div>
				<form className="flex flex-col items-center " onSubmit={handleSubmit}>
					<input type="text" className="w-[250px] mt-4 p-2 rounded-sm" placeholder="username" value={username} onChange={(e) => handleUsernameChange(e.target.value)} />
					<input type="password" className="w-[250px] mt-4 p-2 rounded-sm" placeholder="password" value={password} onChange={(e) => handlePasswordChange(e.target.value)} />
					<button type="submit" className="mt-4 p-2 bg-green-300 rounded-lg shadow-md" disabled={!(validUsername && validPassword && !fetching)}>
						Submit
					</button>
				</form>
				<div>{error}</div>
			</div>
		</div>
	);
};

export default Login;
