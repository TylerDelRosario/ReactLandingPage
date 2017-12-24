import React from 'react';
import Radium from 'radium';

class mainSection extends React.Component {
	render(){
		console.log(this.props.colorCode);
		const StyleButton = {
		base: {
			backgroundColor: this.props.darkColorCode,
			color: 'white',

			':hover': {
				backgroundColor: 'white',
				color:this.props.darkColorCode,
			}
		},
		};

		return(
			<div className={this.props.darkColor + ' mainSection'}>		
				<h2>Say Hi To The Landing Page</h2>
				<p>Lorem ipsum dolor sit amet, consectetur
				 adipiscing elit. Donec ac elit a nisi feugiat
				 consectetur hendrerit eget mi. Nullam libero felis, eleifend sed.</p>
				 <button style={StyleButton.base}>Learn More</button>
			</div>
		);
	};
}

export default Radium(mainSection);