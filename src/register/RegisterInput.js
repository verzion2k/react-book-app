import React, { Component } from 'react';
import './sass/RegisterInput.scss';

class RegisterInput extends Component {
	render() {
		const { title, type, placeholder, className } = this.props;
		return (
			<div className="register__input__group">
				<label className="register__input__title">{title}</label>
				<input type={type} className={`register__input ${className}`} placeholder={placeholder} />
			</div>
		);
	}
}

export default RegisterInput;
