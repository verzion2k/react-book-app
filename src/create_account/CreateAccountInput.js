import React, { Component } from 'react';
import './sass/CreateAccountInput.scss';

class CreateAccountInput extends Component {
	render() {
		return (
			<div className="new__account__input--icon">
				<label className="new__account__input--label">Email</label>
				<input type="email" className="new__account__input--email" placeholder="ducawizard@gmail.com" />
			</div>
		);
	}
}

export default CreateAccountInput;
