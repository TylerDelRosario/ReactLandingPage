import React from 'react';

const person = (props) => {
	return (
	<div className='Person'>
		<p onClick={props.click}>I'm {props.person.name} and I am {props.person.age} years old</p>
		<p>{props.children}</p>
		<input type='text' onChange={props.changed} value={props.person.name}/>
	</div>
	);
}

export default person;