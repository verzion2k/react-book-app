import React, { Component } from 'react';
import './sass/Button.scss';

export default class Button extends Component {
	render() {
		const { buttonName, buttonClassName } = this.props;
		return <button className={`button ${buttonClassName}`}>{buttonName}</button>;
	}
}
