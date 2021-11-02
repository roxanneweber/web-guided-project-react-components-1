import React from 'react';

function Playground() {
	return (
		<div>
			<h1>PLAYGROUND!!!</h1>
		</div>
	);
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
