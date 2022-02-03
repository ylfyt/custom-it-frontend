import Wrapper from './components/Wrapper';
import Home from './pages/Home';
import Product from './pages/product';
import { createClient, Provider } from 'urql';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './pages/register';
import Login from './pages/login';
import NavBar from './components/Navbar';
import { useState } from 'react';
import User from './pages/user';
import CreateStore from './pages/create-store';

const client = createClient({
	url: 'http://localhost:3333/graphql',
	fetchOptions: {
		credentials: 'include',
	},
});

function App() {
	const [signal, setSignal] = useState(false);

	const toggleSignal = (val: boolean) => {
		setSignal(val);
	};

	return (
		<Router>
			<Provider value={client}>
				<div className="App">
					<Wrapper>
						<NavBar signal={signal} toggleSignal={toggleSignal} />
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/product/:productSlug" element={<Product />} />
							<Route path="/register" element={<Register />} />
							<Route path="/login" element={<Login toggleSignal={toggleSignal} />} />
							<Route path="/user/:username" element={<User />} />
							<Route path="/create-store" element={<CreateStore />} />
						</Routes>
					</Wrapper>
				</div>
			</Provider>
		</Router>
	);
}

export default App;
