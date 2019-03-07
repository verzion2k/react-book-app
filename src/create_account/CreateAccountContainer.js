import React, { Component } from 'react';
import './sass/CreateAccountContainer.scss';
import CreateAccountHeader from './CreateAccountHeader';
import CreateAccountForm from './CreateAccountForm';

class CreateAccountContainer extends Component {
	render() {
		return (
			<div className="new__account">
				<CreateAccountHeader />
				<CreateAccountForm />
			</div>
		);
	}
}

export default CreateAccountContainer;
