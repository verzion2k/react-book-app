import React, { Component } from 'react';
import './sass/Login.scss';
import LoginHeader from './LoginHeader';
import LoginForm from './LoginForm';

export default class Login extends Component {
	render() {
		return (
			<div className="login">
				<LoginHeader
					loginPortalXs="login__circle--xs"
					loginPortalS="login__circle--s"
					loginPortalLg="login__circle--lg"
				/>
				<LoginForm
					email="email"
					password="password"
					emailPlaceholder="ducawizard@gmail.com"
					passwordPlaceholder="••••••••"
					emailClassName="input__email"
					passwordClassName="input__password"
				/>
			</div>
		);
	}
}
