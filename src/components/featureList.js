import React from 'react';
import Radium from 'radium';
import PackageComponent from './packageComponent.js';

class featureList extends React.Component {
	render(){
		const textColor = {
			base: {
				color: this.props.textColor,
				transition: '.5s',
			},

			headerBottom: {
				display: 'block',
				marginTop: '10px',
				marginBottom:'10px',
				marginLeft:'auto',
				marginRight:'auto',
				width: '250px',
				height: '3px',
				backgroundColor: this.props.textColor,
				transition: '.5s',
			},

			featureButton: {
				cursor:'pointer',
				display:'block',
				margin:'0px auto 50px auto',
				fontFamily:'Lato',
				fontWeight:'700',
				fontSize:'1.2em',
				color:'white',
				backgroundColor: this.props.textColor,
				padding:'15px',
				width:'250px',
				transition: '.5s',

				':hover': {
					backgroundColor:'white',
					borderColor:this.props.textColor,
					color:this.props.textColor,
				}
			}
		};

		return(
			<div className='featureContainer'>
				<h2 style={textColor.base} className='featureHeading'>Our Popular Packages</h2>
				<p style={textColor.base}>Lorem ipsum dolor sit amet, consectetur
				 adipiscing elit. Donec ac elit a nisi feugiat
				 consectetur hendrerit eget mi.</p>
				 <div style={textColor.headerBottom} className='headerBottom'></div>
				 <div className='packageContainer'>
				 <PackageComponent color={this.props.textColor} packageTitle='First Package' />
				 <PackageComponent color={this.props.textColor} packageTitle='Second Package' />
				 <PackageComponent color={this.props.textColor} packageTitle='Third Package' />
				 <PackageComponent color={this.props.textColor} packageTitle='Fourth Package' />
				 </div>
				 <button style={textColor.featureButton} className='featureButton'>Pricing Options</button>
			</div>
		);
	};
}

export default Radium(featureList);