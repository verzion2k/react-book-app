import React, { Component } from 'react';
import SearchHeader from '../components/SearchHeader';
import BookDetails from './BookDetails';
import { BookContext } from '../main/BookContext';
import './sass/base.scss';

export default class BookReview extends Component {
	render() {
		let book = this.context;
		const id = this.props.match.params.book;

		if (localStorage.getItem('book') === null) {
			localStorage.setItem('book', JSON.stringify(book));
		} else {
			book = JSON.parse(localStorage.getItem('book'));
		}

		return (
			<div className="book__review">
				<SearchHeader title="Add Book Review" showArrowIcon />
				<BookDetails {...book[id]} />
			</div>
		);
	}
}

BookReview.contextType = BookContext;
