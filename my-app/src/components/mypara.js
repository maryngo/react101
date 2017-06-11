import React, { Component } from 'react';

export default class MyPara extends Component {
	render(){
		return(
			<div>
				<p className="poop">
					{this.props.title}
				</p>
				<p>
					{this.props.year}
				</p>
			</div>
		);
	}
}