import React, { Component } from 'react';
import './sass/RegisterForm.scss';
import Input from '../components/Input';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

export default class RegisterForm extends Component {
	render() {
		const {
			email,
			password,
			passwordAgain,
			emailPlaceholder,
			passwordPlaceholder,
			passwordAgainPlaceholder,
			emailClassName,
			passwordClassName,
			passwordAgainClassName
		} = this.props;
		return (
			<div className="register__form">
				<div className="register__form__input__wrapper">
					<Input type={email} title={email} placeholder={emailPlaceholder} className={emailClassName} />
					<Input
						type={password}
						title={password}
						placeholder={passwordPlaceholder}
						className={passwordClassName}
					/>
					<Input
						type={password}
						title={passwordAgain}
						placeholder={passwordAgainPlaceholder}
						className={passwordAgainClassName}
					/>
				</div>

				<Button />

				<p className="register__form__footer__text">
					Already have an account?
					{/* <button className="register__form__footer__button">Login</button> */}
					<Link to="/login" className="register__form__footer__button">
						Login
					</Link>
				</p>
			</div>
		);
	}
}
