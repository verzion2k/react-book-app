import React, { Component } from 'react';
import './sass/SearchBar.scss';

export default class SearchBar extends Component {
	render() {
		return (
			<div className="search__bar">
				<input type="text" placeholder="Search Book" className="search__bar__input" />
			</div>
		);
	}
}
