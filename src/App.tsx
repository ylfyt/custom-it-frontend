import React from 'react';
import Wrapper from './components/Wrapper';
import Home from './pages/Home';
import Detail from './pages/detail';

function App() {
	return (
		<div className="App">
			<Wrapper>
				<Detail />
			</Wrapper>
		</div>
	);
}

export default App;
