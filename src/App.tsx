import React from 'react';
import Wrapper from './components/Wrapper';
import Home from './pages/Home';
import Product from './pages/product';
import { createClient, Provider } from 'urql';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const client = createClient({
	url: 'http://localhost:3333/graphql',
	fetchOptions: {
		credentials: 'include',
	},
});

function App() {
	return (
		<Router>
			<Provider value={client}>
				<div className="App">
					<Wrapper>
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/product/:productId" element={<Product />} />
						</Routes>
					</Wrapper>
				</div>
			</Provider>
		</Router>
	);
}

export default App;
