import React from 'react';
import ReactDOM from 'react-dom';
import ColorList from './components/colorList.js';
import Header from './components/navigationHeader.js';
import MainSection from './components/mainSection.js';
import FeatureList from './components/featureList.js';
import './index.css';

class App extends React.Component {
	state = {
		username: 'React Landing Page',
		color: 'blue',
		darkColor: 'darkblue',
		colorCode: '#3498db',
		darkColorCode: '#2980b9',
		items: [(<li>Home</li>), (<li>Latest</li>), (<li>Archive</li>)],
	}

	clickHandler(colorName, colorCode, darkColorCode){
		this.setState({
			color: colorName,
			darkColor: 'dark' + colorName,
			colorCode: colorCode,
			darkColorCode: darkColorCode,
		});
	}

	buyHandler(){

	}

	render(){
		return (
			<div className={this.state.color + ' main'}>
				<Header color={this.state.color} heading={this.state.username} items={this.state.items} />
				<ColorList handler={this.clickHandler.bind(this)} />
				<MainSection darkColorCode={this.state.darkColorCode} colorCode={this.state.colorCode} color={this.state.color} darkColor={this.state.darkColor}/>
				<FeatureList textColor={this.state.darkColorCode}/>		
			</div>
		);  
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('root')
);
