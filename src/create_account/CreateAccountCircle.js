import React, { Component } from 'react';
import './sass/CreateAccountCircle.scss';

class CreateAccountCircle extends Component {
	render() {
		return (
			<div className="new__account__circles">
				<div className="new__account__circle" />
				<div className="new__account__circle__absolute--big" />
				<div className="new__account__circle__absolute--small" />
			</div>
		);
	}
}

export default CreateAccountCircle;
