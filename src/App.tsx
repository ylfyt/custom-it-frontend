import React from 'react';
import Wrapper from './components/Wrapper';
import Home from './pages/Home';
import ProductDetail from './pages/product-detail';

function App() {
	return (
		<div className="App">
			<Wrapper>
				<ProductDetail />
			</Wrapper>
		</div>
	);
}

export default App;
