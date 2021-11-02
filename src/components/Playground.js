import React, { useState } from 'react';

function Playground(props) {
	const [count, setCount] = useState(0); // this sets the default or starting value
	const [spinnerOn, setSpinnerOn] = useState(false);
	// using the square brackets we tell React to use a 'setCount' process which will allow us to update this variable
	console.log(setCount); // we can run this function 'setCount' and it will update our default 'useState' value

	if (spinnerOn) {
		return (
			<div className='container'>
				<h1>THE SPINNER IS ON</h1>
				<button onClick={() => setSpinnerOn(!spinnerOn)}>
					Toggle spinner
				</button>
			</div>
		);
	}
	// once you RETURN from a function, it's done! So, nothing else {below} will run

	//! useState is a function given to use by React to retain value
	console.log(props);
	return (
		<div>
			<h1>PLAYGROUND!!!</h1>
			<button onClick={() => setSpinnerOn(!spinnerOn)}>
				Set the spinner on now
			</button>
			<p>
				Another place for the cohort {props.cohort} props variable to live
			</p>
			<h3>Count is: {count}</h3>
			<button onClick={() => setCount(count + 1)}>Increase count + 1</button>
			<button onClick={() => setCount(count - 1)}>Decrease count -1</button>
		</div>
	);
	//* each time we change the count with setCount, it will change the useCount value; here a refresh will 'reset' the useState value
}

export default Playground; // this will not 'expose' this function to other elements of the App

//! Props = data passed from a PARENT component to a CHILD component

/*
💥💥💥 Rules of STATE 💥💥💥
  - We create a slice of state like this: `const [healthPoints, setHealthPoints] = useState(100)`
  - A component may have as may slices of state as it needs
  - A slice of state may contain a string, a number, a boolean, an array, an object...
  - We use slices of state to store information that changes as the user interacts with the app
  - State is used in the JSX interpolated inside curly brackets
  - We never tamper with state: `healthPoints++`, `healthPoints--` or `someState.push(item)` is FORBIDDEN
  - We use the dedicated "state updater" to schedule a state change: `setHealthPoints(healthPoints + 1)`
*/

// React component is a function, with a capitol first letter, that can optionally also take in props (but props are not always needed)
