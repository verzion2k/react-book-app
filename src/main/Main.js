import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Register from '../register/Register';
import Login from '../login/Login';
import BookList from '../book_list/BookList';

export default class Main extends Component {
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={Register} />
					<Route path="/login" component={Login} />
					<Route path="/books" component={BookList} />
				</Switch>
			</BrowserRouter>
		);
	}
}
