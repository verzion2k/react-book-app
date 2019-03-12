import React, { Component } from 'react';
import books from './icons/books_menu.svg';
import notifications from './icons/notifications_menu.svg';
import review from './icons/review_menu.svg';
import timeline from './icons/timeline_menu.svg';
import './sass/Menu.scss';

export default class Menu extends Component {
	render() {
		return (
			<div className="menu">
				<div className="menu__item">
					<img src={timeline} alt="timeline" />
				</div>
				<div className="menu__item">
					<img src={books} alt="books" />
				</div>
				<div className="menu__item">
					<img src={review} alt="review" />
				</div>
				<div className="menu__item">
					<img src={notifications} alt="notifications" />
				</div>
				<div className="menu__item__home">
					<span className="menu__line" />
				</div>
			</div>
		);
	}
}
