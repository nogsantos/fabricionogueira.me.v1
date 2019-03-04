import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import _ from 'lodash';

import { Collection, CollectionItem } from 'react-materialize';

class PostComponent extends Component {
	constructor() {
		super();
		this.posts = [];
		this.state = {
			posts: []
		};
	}

	componentDidMount() {
		this.posts.push(...this.props.content);
		this.setState({
			posts: [...this.posts]
		});
	}

	componentWillReceiveProps(nextProps) {
		let diff = _.difference(this.props.content, nextProps.content);
		if (diff.length > 0) {
			this.posts.push(...nextProps.content);
			this.setState({
				posts: [...this.posts]
			});
		}
	}

	render() {
		return (
			<div className="content">
				<Collection>
					{this.state.posts.map(post => {
						return (
							<CollectionItem key={post.id}>
								<Link
									to={`post/${post.id}`}
									dangerouslySetInnerHTML={{
										__html: post.title.rendered
									}}
								/>
								<span
									dangerouslySetInnerHTML={{
										__html: post.excerpt.rendered
									}}
								/>
							</CollectionItem>
						);
					})}
				</Collection>
			</div>
		);
	}
}

export default PostComponent;
