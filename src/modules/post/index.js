import React, { Component, Fragment } from 'react';

import DocumentTitle from 'react-document-title';
import axios from 'axios';
import { setupCache } from 'axios-cache-adapter';

import { AppTitle, AppLoading, BtnLoading } from '../../components';
import PostComponent from './PostComponent';

const cache = setupCache({
	maxAge: 31536000
});

const api = axios.create({
	adapter: cache.adapter
});

class Post extends Component {
	static params = {
		title: 'Fabricio Nogueira',
		subtitle: 'Posts & Portfolio'
	};

	constructor(props) {
		super(props);

		this.items_per_page = 5;
		this.state = {
			content: [],
			loading: false,
			isLoading: true,
			total_items: 1,
			total_page: 1,
			offset: 0,
			current_page: 1
		};
	}

	componentDidMount() {
		this.getPosts();
	}

	getPosts = () => {
		api({
			url: `${process.env.REACT_APP_MY_API_ENDPOINT}/posts?per_page=${this.items_per_page}&offset=${this.state.offset}`,
			method: 'get'
		}).then(response => {
			const posts = response.data;
			this.setState({
				content: posts,
				isLoading: !this.state.isLoading,
				current_page: 1,
				offset: 0,
				total_items: response.headers['x-wp-total'],
				total_page: response.headers['x-wp-totalpages']
			});
		});
	};

	loadMorePosts = () => {
		this.setState(
			{
				current_page: this.state.current_page + 1,
				offset: this.state.offset + 5
			},
			this.updateProps
		);
	};

	updateProps = () => {
		this.setState({
			loading: !this.state.loading
		});
		api({
			url: `${process.env.REACT_APP_MY_API_ENDPOINT}/posts?per_page=${this.items_per_page}&offset=${this.state.offset}`,
			method: 'get'
		}).then(response => {
			const posts = response.data;
			this.setState({
				content: posts,
				loading: !this.state.loading
			});
		});
	};

	DataRender = () => {
		return (
			<section>
				<PostComponent content={this.state.content} />
				{this.state.current_page <= this.state.total_page ? (
					<BtnLoading
						loading={this.state.loading}
						onClick={() => this.loadMorePosts()}
						className="btn green lighten-3"
					/>
				) : (
					''
				)}
			</section>
		);
	};

	render() {
		let colors = {
			bg: 'yellow lighten-3',
			text: 'yellow-text text-darken-4',
			subtext: 'yellow-text text-darken-2'
		};
		return (
			<Fragment>
				<DocumentTitle title={`${process.env.REACT_APP_NAME} » ${Post.params.subtitle}`} />
				<AppTitle title={Post.params.title} subtitle={Post.params.subtitle} colors={colors} />
				{this.state.isLoading ? <AppLoading /> : <this.DataRender />}
			</Fragment>
		);
	}
}
export default Post;
