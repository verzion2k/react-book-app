import React, { Component } from 'react';
import './sass/CreateAccountForm.scss';
import CreateAccountInput from './CreateAccountInput';
import CreateAccountButton from './CreateAccountButton';

class CreateAccountForm extends Component {
	render() {
		return (
			<div>
				<CreateAccountInput />
				<CreateAccountButton />
			</div>
		);
	}
}

export default CreateAccountForm;
