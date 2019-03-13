import React, { Component } from 'react';
import book from './img/book.svg';

export default class BookDetails extends Component {
	render() {
		return (
			<div className="book__details">
				<div className="book__details__card">
					<img src={book} alt="" className="book__details__image" />
				</div>
			</div>
		);
	}
}
