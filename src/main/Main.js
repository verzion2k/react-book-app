import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Register from '../register/Register';
import Login from '../login/Login';
import BookList from '../book_list/BookList';
import BookReview from '../book_review/BookReview';

export default class Main extends Component {
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={Register} />
					<Route exact path="/login" component={Login} />
					<Route exact path="/books" component={BookList} />
					<Route path="/review/:book" component={BookReview} />
				</Switch>
			</BrowserRouter>
		);
	}
}
