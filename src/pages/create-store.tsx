import { FunctionComponent, useEffect, useState } from 'react';
import { useCreateStoreMutation, useMeQuery } from '../graphql/generated/graphql';

import { useNavigate } from 'react-router-dom';

interface CreateStoreProps {}

const CreateStore: FunctionComponent<CreateStoreProps> = () => {
	const [{ fetching, error }, createStore] = useCreateStoreMutation();
	const [{ data: dataMe, fetching: fetchingMe, error: errorMe }, reMe] = useMeQuery();

	const navigate = useNavigate();

	const [name, setName] = useState('');
	const [address, setAddress] = useState('');
	const [msg, setMsg] = useState('');

	useEffect(() => {
		if (!fetchingMe) {
			if (dataMe) {
				console.log(dataMe.me?.username);
			}
		}
	}, [dataMe, fetchingMe]);

	const handleSubmit = async () => {
		setMsg('Loading...');
		const response = await createStore({ data: { name, address } });

		if (error) {
			setMsg('Some Error');
			return;
		}

		if (response.data?.createStore === null) {
			setMsg('Failed to Create Store');
			return;
		}

		setMsg('Success to create store');
	};

	return (
		<div className="flex flex-col items-center">
			<h2 className="text-3xl font-bold mb-5">Create Store</h2>
			<form
				action=""
				onSubmit={(e) => {
					e.preventDefault();
					handleSubmit();
				}}
				className="flex flex-col items-center gap-6"
			>
				<input
					value={name}
					onChange={(e) => {
						setName(e.target.value);
					}}
					type="text"
					placeholder="Name"
					className="bg-gray-300 p-2 w-[20rem] rounded-sm"
				/>
				<input
					value={address}
					onChange={(e) => {
						setAddress(e.target.value);
					}}
					type="text"
					placeholder="Address"
					className="bg-gray-300 p-2 w-[20rem] rounded-sm"
				/>
				<button disabled={name === '' || address === '' || fetching} type="submit" className="bg-gray-600 w-1/2 p-1">
					Create
				</button>
			</form>
			<p>{msg}</p>
		</div>
	);
};

export default CreateStore;
