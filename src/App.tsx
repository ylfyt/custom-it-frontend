import React from 'react';
import Wrapper from './components/Wrapper';
import Home from './pages/Home';
import Detail from './pages/detail';
import { createClient, Provider } from 'urql';

const client = createClient({
	url: 'http://localhost:3333/graphql',
	fetchOptions: {
		credentials: 'include',
	},
});

function App() {
	return (
		<Provider value={client}>
			<div className="App">
				<Wrapper>
					<Home />
				</Wrapper>
			</div>
		</Provider>
	);
}

export default App;
