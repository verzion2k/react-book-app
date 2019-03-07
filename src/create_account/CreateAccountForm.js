import React, { Component } from 'react';
import './sass/CreateAccountForm.scss';
import CreateAccountInput from './CreateAccountInput';
import CreateAccountButton from './CreateAccountButton';

class CreateAccountForm extends Component {
	render() {
		return (
			<div className="new__account__form">
				<CreateAccountInput />
				<CreateAccountButton />
				<p>
					Already have an account?
					<button className="new__account__login--button">Login</button>
				</p>
			</div>
		);
	}
}

export default CreateAccountForm;
