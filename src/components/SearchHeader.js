import React, { Component } from 'react';
import signal from './icons/mobile_signal.svg';
import battery from './icons/battery.svg';
import wifi from './icons/wifi.svg';
import './sass/SearchHeader.scss';
import Portal from './Portal';
import SearchBar from './SearchBar';

export default class SearchHeader extends Component {
	render() {
		return (
			<div>
				<div className="search__status">
					<div className="search__status__time">
						<p>5:40 PM</p>
					</div>
					<div className="search__status__icons">
						<img src={signal} alt="signal" />
						<img src={wifi} alt="wifi" />
						<img src={battery} alt="battery" />
					</div>
				</div>

				<div className="search__header">
					<Portal>
						<div className="circle__header" />
					</Portal>
					<div className="search__header__title">
						<h2>My Book List</h2>
					</div>
					<SearchBar />
				</div>
			</div>
		);
	}
}
