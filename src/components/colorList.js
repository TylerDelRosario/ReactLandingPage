import React from 'react';

const colorList = (props) => {
	return (
		<div className='mainList'>
			<ul className='colorPallete'>
				<li onClick={props.handler.bind(this, 'red', '#e74c3c', '#c0392b')} className='red'></li>
				<li onClick={props.handler.bind(this, 'blue', '#3498db', '#2980b9')} className='blue'></li>
				<li onClick={props.handler.bind(this, 'green', '#2ecc71', '#27ae60')} className='green'></li>
				<li onClick={props.handler.bind(this, 'purple', '#9b59b6', '#8e44ad')} className='purple'></li>
				<li onClick={props.handler.bind(this, 'grey', '#34495e', '#2c3e50')} className='grey'></li>
				<li onClick={props.handler.bind(this, 'orange', '#e67e22', '#d35400')} className='orange'></li>
				<li onClick={props.handler.bind(this, 'white', '#95a5a6', '#7f8c8d')} className='white'></li>
			</ul>
		</div>
	);
}

export default colorList;