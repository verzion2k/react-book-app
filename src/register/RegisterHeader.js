import React, { Component } from 'react';
import './sass/RegisterHeader.scss';
import Portal from '../components/Portal';

class RegisterHeader extends Component {
	render() {
		const { registerPortalXs, registerPortalS, registerPortalLg } = this.props;
		return (
			<div className="register__header">
				<Portal>
					<div className={registerPortalXs} />
					<div className={registerPortalS} />
					<div className={registerPortalLg} />
				</Portal>
				<h2 className="register__header__title">Welcome!</h2>
				<h3 className="register__header__desc">
					Create your account to get started. After that, you can share books and make friends.
				</h3>
			</div>
		);
	}
}

export default RegisterHeader;
