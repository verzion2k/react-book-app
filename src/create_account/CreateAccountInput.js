import React, { Component } from 'react';
import './sass/CreateAccountInput.scss';

class CreateAccountInput extends Component {
	render() {
		return (
			<input
				type="email"
				label="email"
				className="new__account__input--email"
				placeholder="ducawizard@gmail.com"
			/>
		);
	}
}

export default CreateAccountInput;
