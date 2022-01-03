import Wrapper from './components/Wrapper';
import Home from './pages/Home';
import Product from './pages/product';
import { createClient, Provider } from 'urql';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './pages/register';
import Login from './pages/login';

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
							<Route path="/register" element={<Register />} />
							<Route path="/login" element={<Login />} />
						</Routes>
					</Wrapper>
				</div>
			</Provider>
		</Router>
	);
}

export default App;
