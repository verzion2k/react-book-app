import React, { Component } from 'react';
import Portal from '../components/Portal';
import '../components/sass/Portal.scss';

export default class LoginHeader extends Component {
	render() {
		const { loginPortalXs, loginPortalS, loginPortalLg } = this.props;
		return (
			<div className="login__header">
				<Portal>
					<div className={`circle--xs ${loginPortalXs}`} />
					<div className={`circle--s ${loginPortalS}`} />
					<div className={`circle--lg ${loginPortalLg}`} />
				</Portal>
				<h2 className="login__header__title">Sign In</h2>
			</div>
		);
	}
}
