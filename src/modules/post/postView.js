import React, { Component, Fragment } from 'react';

import axios from 'axios';
import DocumentTitle from 'react-document-title';
import { setupCache } from 'axios-cache-adapter';
import PostViewComponent from './postViewComponent';

const cache = setupCache({
	maxAge: 31536000
});

const api = axios.create({
	adapter: cache.adapter
});

class PostView extends Component {
	constructor(props) {
		super(props);

		this.state = {
			title: '',
			subtitle: '',
			content: '',
			relatedPosts: [],
			isLoading: true
		};
	}

	componentDidMount() {
		api({
			url: `${process.env.REACT_APP_MY_API_ENDPOINT}/posts/${this.props.match.params.id}`,
			method: 'get'
		}).then(response => {
			this.setState({
				title: response.data.title.rendered,
				subtitle: response.data.excerpt.rendered,
				content: response.data.content.rendered,
				relatedPosts: response.data['jetpack-related-posts'],
				isLoading: !this.state.isLoading
			});
		});
	}

	render() {
		return (
			<Fragment>
				<DocumentTitle title={`${process.env.REACT_APP_NAME} » ${this.state.title}`} />
				<PostViewComponent content={this.state} />
			</Fragment>
		);
	}
}

export default PostView;
