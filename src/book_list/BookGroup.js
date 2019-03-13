import React, { Component } from 'react';
import './sass/BookGroup.scss';
import BookItem from './BookItem';
import Portal from '../components/Portal';
import Button from '../components/Button';
import BookContext from '../main/BookContext';

class BookGroup extends Component {
	render() {
		const book = this.context;
		const bookList = Object.keys(book).map((index) => {
			return <BookItem key={index} route={index} {...book[index]} />;
		});

		return (
			<div className="book__wrapper">
				<div className="book__group">
					<h2 className="book__group__title">Books Reviewed By You</h2>
					{bookList}
				</div>
				<Button buttonName="Add book review" buttonClassName="book__button" />

				<Portal>
					<div className="overlay" />
				</Portal>
			</div>
		);
	}
}

BookGroup.contextType = BookContext;

export default BookGroup;
