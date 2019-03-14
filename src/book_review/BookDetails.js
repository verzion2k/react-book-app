import React, { Component } from 'react';
import './sass/BookDetails.scss';
import book from './img/book.svg';
import star from './icon/single-star.svg';
import stars from './icon/stars.svg';
import Button from '../components/Button';
import Menu from '../components/Menu';

export default class BookDetails extends Component {
	render() {
		return (
			<div className="book__details">
				<div className="book__details__card">
					<div className="book__details__card-left">
						<img src={book} alt="book" className="book__details__image" />
					</div>
					<div className="book__details__card-right">
						<h2 className="book__details__title">Pet Semetary</h2>
						<h3 className="book__details__author">Stephen King</h3>
						<div className="book__details__feedback">
							<img src={star} alt="review" className="book__details__star" />
							<p className="book__details__rate">4.68</p>
						</div>

						<h4 className="book__details__reviews">2.464 reviews</h4>
					</div>
				</div>
				<div className="book__details__desc">
					<p className="book__details__desc__text">
						Sometimes dead is better....When the Creeds move into a beautiful old house in rural Maine, it
						all seems too good to be true: physician father, beautiful wife, charming little daughter,
						adorable infant son -- and now an idyllic home....
					</p>
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
