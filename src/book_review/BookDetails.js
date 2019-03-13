import React, { Component } from 'react';
import './sass/BookDetails.scss';
import book from './img/book.svg';
import star from './icon/single-star.svg';

export default class BookDetails extends Component {
	render() {
		return (
			<div className="book__details">
				<div className="book__details__card-left">
					<img src={book} alt="" className="book__details__image" />
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
		);
	}
}
