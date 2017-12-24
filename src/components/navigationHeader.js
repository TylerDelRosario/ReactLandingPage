import React from 'react';

const header = (props) => {
	return (
		<div className={props.color + ' navHeader'}>
			<h1>{props.heading}</h1>
			<ul>{props.items}</ul>
		</div>
	);
}

export default header;