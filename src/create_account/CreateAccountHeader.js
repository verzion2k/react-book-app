import React, { Component } from 'react';
import './sass/CreateAccountHeader.scss';
import CirclePortal from './CirclePortal';

class CreateAccountHeader extends Component {
	render() {
		return (
			<div className="new__account__header">
				<CirclePortal>
					<div className="new__account__circle--xs" />
					<div className="new__account__circle--s" />
					<div className="new__account__circle--lg" />
				</CirclePortal>
				<h2 className="new__account__header--title">Welcome!</h2>
				<h3 className="new__account__header--desc">
					Create your account to get started. After that, you can share books and make friends.
				</h3>
			</div>
		);
	}
}

export default CreateAccountHeader;
