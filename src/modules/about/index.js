import React, { Component, Fragment } from 'react';

import DocumentTitle from 'react-document-title';
import axios from 'axios';
import { setupCache } from 'axios-cache-adapter';

import { AppTitle, AppLoading } from '../../components';
import AboutComponent from './AboutComponent';

const cache = setupCache({
	maxAge: 31536000
});

const api = axios.create({
	adapter: cache.adapter
});

class About extends Component {
	static params = {
		title: 'Fabricio Nogueira',
		subtitle: 'Sobre'
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
			url: `${process.env.REACT_APP_MY_API_ENDPOINT}/pages/180`,
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
		let colors = {
			bg: 'green lighten-3',
			text: 'green-text text-darken-4',
			subtext: 'green-text text-darken-2'
		};
		return (
			<Fragment>
				<DocumentTitle title={`${process.env.REACT_APP_NAME} » ${About.params.subtitle}`} />
				<AppTitle title={About.params.title} subtitle={About.params.subtitle} colors={colors} />
				{this.state.isLoading ? <AppLoading /> : <AboutComponent content={this.state.content} />}
			</Fragment>
		);
	}
}
export default About;
