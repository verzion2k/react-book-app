import React, { Component } from 'react';
import './sass/BookGroup.scss';
import BookItem from './BookItem';
import Portal from '../components/Portal';
import Button from '../components/Button';
import remoteBook from './icons/remote-book.svg';
import darkTower from './icons/dark-tower-book.svg';
import papillon from './icons/papillon-book.svg';

export default class BookGroup extends Component {
	render() {
		return (
			<div className="book__wrapper">
				<div className="book__group">
					<h2 className="book__group__title">Books Reviewed By You</h2>

					<BookItem
						img={remoteBook}
						title="Remote: Office Not Required"
						author="Jason Fried"
						route="remote"
					/>
					<BookItem img={papillon} title="Papillon" author="Henri Charriere" route="papillon" />
					<BookItem
						img={darkTower}
						title="The Dark Tower: The Gunslinger"
						author="Stephen King"
						route="the-dark-tower"
					/>
					<BookItem
						img={remoteBook}
						title="Remote: Office Not Required"
						author="Jason Fried"
						route="remote"
					/>
					<BookItem img={papillon} title="Papillon" author="Henri Charriere" route="papillon" />
					<BookItem
						img={darkTower}
						title="The Dark Tower: The Gunslinger"
						author="Stephen King"
						route="the-dark-tower"
					/>
				</div>
				<Button buttonName="Add book review" buttonClassName="book__button" />

				<Portal>
					<div className="overlay" />
				</Portal>
			</div>
		);
	}
}
