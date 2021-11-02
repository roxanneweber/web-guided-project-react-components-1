import React from 'react';
import { render } from 'react-dom';

import Playground from './components/Playground';

/*
💥💥💥 Rules when DECLARING a React component 💥💥💥
  - Name is capitalized
  - Takes an object ("props") as its one argument
  - Must return SOMETHING (null, empty string, elements...)
  - React provides some built-in components that return HTML elements (h1, div, span...)
  - Attribute names with dashes are camelCased (except data- & aria-)
  - The `class` attribute is `className`, `for` attribute is `htmlFor`
  - We can INTERPOLATE 🔥 js expressions 🔥 using curly brackets
  - We interpolate attribute values and content
*/

/*
💥💥💥 Rules when USING a React component 💥💥💥
  - Components are utilized (invoked?) so we may obtain elements
  - Instead of invoking the component with parens, we invoke with < />
  - Instead of passing args with parens, we pass them with attribute-like syntax
  - Don't forget all tags need to close correctly
*/

function App(props) {
	console.log(props);
	// we will never see 'props' as something else - this is only used once for each app, and we don't know how many variables are passing through so we just create one object, called props, which now allows us to pull in an arbitrary number of key/value pairs

	return (
		// this is JSX - a templating language provided by React
		// React is doing all the messiness for us and returning all our elements, either HTML elements or javascript elements or both

		<div className='container'>
			<h1>Welcome to React, Web {props.cohort}</h1>
			<h2>Your Instructor is: {props.instructor}</h2>
			<p>This is week {props.week}</p>
			<Playground cohort={props.cohort} />
			{props.happy ? (
				<p>We are Very Happy!!!</p>
			) : (
				<p>Nope, not very happy(</p>
			)}
		</div>
	);
}
// the props.happy is a ternary statement in javascript
// every React app has a render
// tabsAppender(selector) --> this appended our elements
// this is what React is doing for us

render(
	// these values below (cohort=49 and instructor = casey, are looped over by react and assigned to an object named 'props' as indicated in the argument of function App)

	<App cohort='49' instructor='Casey' week='2' happy={true} />, // here we are passing 'cohort' value into the App
	document.querySelector('#root')
);
// components are just functions like they were before
// components can take in attributes
