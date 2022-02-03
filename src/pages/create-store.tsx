import { FunctionComponent } from 'react';

interface CreateStoreProps {}

const CreateStore: FunctionComponent<CreateStoreProps> = () => {
	return (
		<div className="flex flex-col items-center">
			<h2 className="text-3xl font-bold mb-5">Create Store</h2>
			<form action="" className="flex flex-col items-center gap-6">
				<input type="text" placeholder="Name" className="bg-gray-300 p-2 w-[20rem] rounded-sm" />
				<input type="text" placeholder="Address" className="bg-gray-300 p-2 w-[20rem] rounded-sm" />
				<button type="submit" className="bg-gray-600 w-1/2 p-1">
					Create
				</button>
			</form>
		</div>
	);
};

export default CreateStore;
