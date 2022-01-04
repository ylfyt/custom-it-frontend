import Wrapper from './components/Wrapper';
import Home from './pages/Home';
import Product from './pages/product';
import { createClient, Provider } from 'urql';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './pages/register';
import Login from './pages/login';
import NavBar from './components/Navbar';
import { useState } from 'react';

const client = createClient({
	url: 'http://localhost:3333/graphql',
	fetchOptions: {
		credentials: 'include',
	},
});

function App() {
	const [signal, setSignal] = useState(false);

	const toggleSignal = () => {
		setSignal(!signal);
	};

	return (
		<Router>
			<Provider value={client}>
				<div className="App">
					<Wrapper>
						<NavBar signal={signal} />
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/product/:productId" element={<Product />} />
							<Route path="/register" element={<Register />} />
							<Route path="/login" element={<Login toggleSignal={toggleSignal} />} />
						</Routes>
					</Wrapper>
				</div>
			</Provider>
		</Router>
	);
}

export default App;
