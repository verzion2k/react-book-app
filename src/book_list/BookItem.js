import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './sass/BookItem.scss';
import stars from './icons/stars.svg';

export default class BookItem extends Component {
	render() {
		const { title, author, img, route } = this.props;
		return (
			<div className="book__item">
				<div className="book__image">
					<Link to={`/review/${route}`}>
						<img src={img} alt="book" />
					</Link>
				</div>

				<div className="book__description">
					<h2 className="book__title">{title}</h2>
					<h3 className="book__author">{author}</h3>
					<img src={stars} alt="review" className="book__review" />
				</div>
			</div>
		);
	}
}
