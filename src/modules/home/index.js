import React, { Component, Fragment } from 'react';

import DocumentTitle from 'react-document-title';
import axios from 'axios';
import { setupCache } from 'axios-cache-adapter';

import { AppTitle, AppLoading } from '../../components';
import HomeComponent from './HomeComponent';

const cache = setupCache({
	maxAge: 31536000
});

const api = axios.create({
	adapter: cache.adapter
});

class Home extends Component {
	static params = {
		title: 'Fabricio Nogueira',
		subtitle: '$uname -a'
	};

	constructor(props) {
		super(props);
		this.state = {
			content: '',
			isLoading: true
		};
	}

	componentDidMount() {
		api({
			url: `${process.env.REACT_APP_MY_API_ENDPOINT}/pages/11`,
			method: 'get'
		}).then(response => {
			const posts = response.data.content.rendered;
			this.setState({
				content: posts,
				isLoading: !this.state.isLoading
			});
		});
	}

	render() {
		return (
			<Fragment>
				<DocumentTitle title={`${process.env.REACT_APP_NAME} » Home`} />
				<AppTitle title={Home.params.title} subtitle={Home.params.subtitle} />
				{this.state.isLoading ? <AppLoading /> : <HomeComponent content={this.state.content} />}
			</Fragment>
		);
	}
}
export default Home;
