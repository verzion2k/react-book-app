import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Register from '../register/Register';
import Login from '../login/Login';
import BookList from '../book_list/BookList';
import BookReview from '../book_review/BookReview';
import BookContext from './BookContext';
import './sass/Main.scss';
import faker from 'faker';

export default class Main extends Component {
	handleBookData = () => {
		const book = {};

		for (var i = 0; i < 8; i++) {
			book[faker.random.uuid()] = {
				image: faker.random.image(),
				title: faker.name.title(),
				author: faker.name.findName(),
				rating: faker.commerce.price(),
				reviews: faker.random.number({ min: 1, max: 5000 }),
				description: faker.lorem.paragraph()
			};
		}
		return book;
	};

	render() {
		return (
			<BrowserRouter>
				<BookContext.Provider value={this.handleBookData()}>
					<Switch>
						<Route exact path="/" component={Register} />
						<Route exact path="/login" component={Login} />
						<Route exact path="/books" component={BookList} />
						<Route path="/review/:book" component={BookReview} />
					</Switch>
				</BookContext.Provider>
			</BrowserRouter>
		);
	}
}
