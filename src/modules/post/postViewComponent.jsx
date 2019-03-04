import React, { Component, Fragment } from 'react';

import { AppTitle, AppLoading } from '../../components';
import { strip_tags } from '../../utils/functions';

class PostViewComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: 'Carregando...',
			subtitle: 'Por favor aguarde.',
			content: '',
			relatedPosts: [],
			loading: true
		};
	}

	componentWillReceiveProps() {
		this.setState((prevState, props) => {
			return {
				title: props.content.title,
				subtitle: props.content.subtitle,
				content: props.content.content,
				relatedPosts: props.content['jetpack-realted-posts'],
				loading: props.isLoading
			};
		});
	}

	DataRender = () => {
		return (
			<div className="row">
				<div className="col s12" dangerouslySetInnerHTML={{ __html: this.state.content }} />
			</div>
		);
	};

	render() {
		let state = this.state;
		return (
			<Fragment>
				<AppTitle title={strip_tags(state.title)} subtitle={strip_tags(state.subtitle)} />
				{this.state.loading ? <AppLoading /> : <this.DataRender />}
			</Fragment>
		);
	}
}

export default PostViewComponent;
