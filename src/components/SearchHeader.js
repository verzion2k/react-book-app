import React, { Component } from 'react';
import signal from './icons/mobile_signal.svg';
import battery from './icons/battery.svg';
import wifi from './icons/wifi.svg';
import arrow from './icons/arrow-left.svg';
import './sass/SearchHeader.scss';
import Portal from './Portal';
import { withRouter } from 'react-router-dom';

class SearchHeader extends Component {
	goBack = () => {
		this.props.history.goBack();
	};

	render() {
		const { title, showArrowIcon } = this.props;
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
					<img
						src={arrow}
						className={showArrowIcon ? 'search__header__arrow' : 'search__header__arrow--none'}
						alt="arrow"
						onClick={this.goBack}
					/>

					<Portal>
						<div className="circle__header" />
					</Portal>
					<div className="search__header__title">
						<h2>{title}</h2>
					</div>
				</div>
			</div>
		);
	}
}

export default withRouter(SearchHeader);
