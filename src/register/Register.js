import React, { Component } from 'react';
import './sass/Register.scss';
import RegisterHeader from './RegisterHeader';
import RegisterForm from './RegisterForm';

class Register extends Component {
	render() {
		return (
			<div className="register">
				<RegisterHeader />
				<RegisterForm
					email="email"
					password="password"
					passwordAgain="type password again"
					emailPlaceholder="ducawizard@gmail.com"
					passwordPlaceholder="••••••••"
					passwordAgainPlaceholder="•••••"
					emailClassName="register__input__email"
					passwordClassName="register__input__password"
					passwordAgainClassName="register__input__password-again"
				/>
			</div>
		);
	}
}

export default Register;
