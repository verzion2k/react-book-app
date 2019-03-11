import React, { Component } from 'react';
import './sass/LoginHeader.scss';
import Portal from '../components/Portal';
import './sass/LoginPortal.scss';

class LoginHeader extends Component {
	render() {
		const { loginPortalXs, loginPortalS, loginPortalLg } = this.props;
		return (
			<div className="login__header">
				<Portal>
					<div className={loginPortalXs} />
					<div className={loginPortalS} />
					<div className={loginPortalLg} />
				</Portal>
				<h2 className="login__header__title">Sign In</h2>
			</div>
		);
	}
}

export default LoginHeader;
