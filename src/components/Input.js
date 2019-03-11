import React, { Component } from 'react';
import './sass/Input.scss';

export default class Input extends Component {
	render() {
		const { title, type, placeholder, className } = this.props;
		return (
			<div className="input__group">
				<label className="input__title">{title}</label>
				<input type={type} className={`input ${className}`} placeholder={placeholder} />
			</div>
		);
	}
}
