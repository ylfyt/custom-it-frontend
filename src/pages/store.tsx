import { FunctionComponent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CreateStore from '../components/CreateStore';
import { useMeQuery } from '../graphql/generated/graphql';

interface StoreProps {}

const Store: FunctionComponent<StoreProps> = () => {
	const [{ data: dataMe, fetching: fetchingMe, error: errorMe }, reMe] = useMeQuery();

	const [isStore, setIsStore] = useState(false);

	const navigate = useNavigate();

	const [msg, setMsg] = useState('');

	useEffect(() => {
		if (!fetchingMe) {
			if (!errorMe) {
				if (dataMe?.me) {
					setIsStore(dataMe.me.isStore);
				} else {
					console.log('Not Auth');
				}
			} else {
				console.log('Some Error');
			}
		}
	}, [dataMe, errorMe, fetchingMe]);
	return (
		<div>
			<div>{isStore ? <p>Store Detail</p> : <CreateStore />}</div>
		</div>
	);
};

export default Store;
