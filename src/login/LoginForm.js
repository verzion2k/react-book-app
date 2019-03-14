import React, { Component } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

export default class LoginForm extends Component {
	render() {
		const {
			email,
			password,
			emailPlaceholder,
			passwordPlaceholder,
			emailClassName,
			passwordClassName
		} = this.props;
		return (
			<div className="login__form">
				<div className="login__form__input__wrapper">
					<Input type={email} title={email} placeholder={emailPlaceholder} className={emailClassName} />
					<Input
						type={password}
						title={password}
						placeholder={passwordPlaceholder}
						className={passwordClassName}
					/>
				</div>

				<Button buttonName="Sign up" />

				<p className="login__form__footer__text">
					New here?
					<Link to="/books" className="login__form__footer__button">
						Create an account
					</Link>
				</p>
			</div>
		);
	}
}
