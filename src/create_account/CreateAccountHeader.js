import React, { Component } from 'react';
import CreateAccountCircle from './CreateAccountCircle';
import './sass/CreateAccountHeader.scss';

class CreateAccountHeader extends Component {
	render() {
		return (
			<div>
				<CreateAccountCircle />
				This is a header
			</div>
		);
	}
}

export default CreateAccountHeader;
