import React, { Component } from 'react';
import './sass/RegisterForm.scss';
import RegisterInput from './RegisterInput';
import RegisterButton from './RegisterButton';
import { Link } from 'react-router-dom';

class RegisterForm extends Component {
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
					<RegisterInput
						type={email}
						title={email}
						placeholder={emailPlaceholder}
						className={emailClassName}
					/>
					<RegisterInput
						type={password}
						title={password}
						placeholder={passwordPlaceholder}
						className={passwordClassName}
					/>
					<RegisterInput
						type={password}
						title={passwordAgain}
						placeholder={passwordAgainPlaceholder}
						className={passwordAgainClassName}
					/>
				</div>

				<RegisterButton />

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

export default RegisterForm;
