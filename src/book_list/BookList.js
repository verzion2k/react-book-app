import React, { Component } from 'react';
import SearchHeader from '../components/SearchHeader';
import BookGroup from './BookGroup';
import './sass/BookList.scss';

export default class BookList extends Component {
	render() {
		return (
			<div className="booklist">
				<SearchHeader />
				<BookGroup />
			</div>
		);
	}
}
