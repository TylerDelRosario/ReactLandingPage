import React from 'react';

const packageSection = (props) => {
	const colorStyle = {
		backgroundColor: props.color,
		borderColor: 'white',
		transition: '.5s',
	};

	const textColor = {
		color: props.color,
		transition: '.5s',
	};
	return(
		<div style={colorStyle} className='packageSection'>
			<h3>{props.packageTitle}</h3>
			<ul style={textColor}>
				<li className='evenItem'>Lorem Ipsum amet</li>
				<li className='oddItem'>Lorem Ipsum amet</li>
				<li className='evenItem'>Lorem Ipsum amet</li>
				<li className='oddItem'>Lorem Ipsum amet</li>
				<li className='evenItem'>Lorem Ipsum amet</li>
				<li className='oddItem'>Lorem Ipsum amet</li>
			</ul>
		</div>
	);
}

export default packageSection;