import React, { Component } from 'react';
import star from '../main/icon/book_review/single-star.svg';
import stars from '../main/icon/book_review/stars.svg';
import Button from '../components/Button';
import Menu from '../components/Menu';

export default class BookDetails extends Component {
	render() {
		const { image, title, author, rating, reviews, description } = this.props;

		return (
			<div className="book__details">
				<div className="book__details__card">
					<div className="book__details__card-left">
						<img src={image} alt="book" className="book__details__image" />
					</div>
					<div className="book__details__card-right">
						<h2 className="book__details__title">{title}</h2>
						<h3 className="book__details__author">{author}</h3>
						<div className="book__details__feedback">
							<img src={star} alt="review" className="book__details__star" />
							<p className="book__details__rate">{rating}</p>
						</div>

						<h4 className="book__details__reviews">{reviews} reviews</h4>
					</div>
				</div>
				<div className="book__details__desc">
					<p className="book__details__desc__text">{description}</p>
					<h3 className="book__details__desc__more">Full Synopsis</h3>
				</div>
				<div className="book__details__rating">
					<h2 className="book__details__rating__text">TAP TO ADD RATING</h2>
					<img src={stars} alt="rating" className="book__details__rating__img" />
					<Button buttonName="next" />
				</div>
				<Menu menuMargin="margin--low" />
			</div>
		);
	}
}
