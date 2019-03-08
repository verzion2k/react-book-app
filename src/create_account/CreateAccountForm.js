import React, { Component } from 'react';
import './sass/CreateAccountForm.scss';
import CreateAccountInput from './CreateAccountInput';
import CreateAccountButton from './CreateAccountButton';

class CreateAccountForm extends Component {
	render() {
		return (
			<div className="new__account__form">
				<div className="new__account__form--inputs">
					<CreateAccountInput />
					<CreateAccountInput />
					<CreateAccountInput />
				</div>

				<CreateAccountButton />
				<p className="new__account__form__footer--text">
					Already have an account?
					<button className="new__account__form__footer--login">Login</button>
				</p>
			</div>
		);
	}
}

export default CreateAccountForm;
