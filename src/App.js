import './App.css';
import { useState } from 'react';

const App = (props) => {
	const [counter, setCounter] = useState(0);

	function calcPlus() {
		if (counter < 10) {
			setCounter(counter + 1);
		}
	}

	function calcMin() {
		if (counter > -10) {
			setCounter(counter - 1);
		}
	}

	function rndCounter() {
		setCounter(+(Math.random() * (10 - -10) + -10).toFixed(0));
	}

	function reset() {
		setCounter(props.counter);
	}

	return (
		<div className="app">
			<div className="counter">{counter}</div>
			<div className="controls">
				<button onClick={calcPlus}>INC</button>
				<button onClick={calcMin}>DEC</button>
				<button onClick={rndCounter}>RND</button>
				<button onClick={reset}>RESET</button>
			</div>
		</div>
	);
};

export default App;
