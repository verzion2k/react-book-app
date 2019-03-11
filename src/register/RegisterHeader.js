import React, { Component } from 'react';
import './sass/RegisterHeader.scss';
import RegisterPortal from './RegisterPortal';

class RegisterHeader extends Component {
	render() {
		return (
			<div className="register__header">
				<RegisterPortal>
					<div className="register__circle--xs" />
					<div className="register__circle--s" />
					<div className="register__circle--lg" />
				</RegisterPortal>
				<h2 className="register__header__title">Welcome!</h2>
				<h3 className="register__header__desc">
					Create your account to get started. After that, you can share books and make friends.
				</h3>
			</div>
		);
	}
}

export default RegisterHeader;
