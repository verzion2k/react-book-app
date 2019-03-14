import React, { Component } from 'react';
import SearchHeader from '../components/SearchHeader';
import BookDetails from './BookDetails';
import './sass/BookReview.scss';

export default class BookReview extends Component {
	render() {
		return (
			<div className="book__review">
				<SearchHeader title="Add Book Review" showArrowIcon />
				<BookDetails bookData={this.props.location.state.bookProps} />
			</div>
		);
	}
}
