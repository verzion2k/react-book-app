import React, { Component } from 'react';
import './sass/Register.scss';
import RegisterHeader from './RegisterHeader';
import RegisterForm from './RegisterForm';

class Register extends Component {
	render() {
		return (
			<div className="register">
				<RegisterHeader
					registerPortalXs="register__circle--xs"
					registerPortalS="register__circle--s"
					registerPortalLg="register__circle--lg"
				/>
				<RegisterForm
					email="email"
					password="password"
					passwordAgain="type password again"
					emailPlaceholder="ducawizard@gmail.com"
					passwordPlaceholder="••••••••"
					passwordAgainPlaceholder="•••••"
					emailClassName="input__email"
					passwordClassName="input__password"
					passwordAgainClassName="input__password-again"
				/>
			</div>
		);
	}
}

export default Register;
