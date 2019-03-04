import React, { Component, Fragment } from 'react';
import { Collection, CollectionItem } from 'react-materialize';

import { AppTitle, AppLoading } from '../../components';

import { Avatar, Thumb, Badge } from './Style';

class GitHubComponent extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: 'Carregando...',
			bio: 'Por favor aguarde.',
			avatar: '',
			url: '',
			location: '',
			repositories: []
		};
	}

	componentWillReceiveProps() {
		this.setState((prevState, props) => {
			return {
				name: props.user.name,
				bio: props.user.bio,
				avatar: props.user.avatarUrl,
				location: props.user.location,
				url: props.user.url,
				repositories: props.user.repositories.edges
			};
		});
	}

	DataRender = props => {
		const { avatar, location, url, repositories } = this.state;
		return (
			<div className="content">
				<Avatar className="hide-on-small-only">
					{avatar ? (
						<a href={url} target="_blank" rel="noopener noreferrer">
							<Thumb src={avatar} alt="" className="circle responsive-img" />
						</a>
					) : (
						''
					)}
					<p>
						<small className="grey-text text-lighten-5">{location}</small>
					</p>
				</Avatar>
				<div className="row">
					<div className="col s12" id="repositoriesList">
						<Collection>
							{repositories.map(rep => {
								return (
									<CollectionItem href={rep.node.url} key={rep.node.id}>
										<h5>{rep.node.name}</h5>
										<p>{rep.node.description}</p>
										{rep.node.repositoryTopics.edges.map(item => {
											return (
												<small key={item.node.topic.id}>
													<Badge className="blue lighten-3 white-text">{item.node.topic.name}</Badge>
												</small>
											);
										})}
									</CollectionItem>
								);
							})}
						</Collection>
					</div>
				</div>
			</div>
		);
	};

	render() {
		let colors = {
			bg: 'grey darken-4',
			text: 'grey-text text-lighten-5',
			subtext: 'grey-text text-lighten-5'
		};
		return (
			<Fragment>
				<AppTitle title={this.state.name} subtitle={this.state.bio} colors={colors} />
				{this.props.loading ? <AppLoading /> : <this.DataRender />}
			</Fragment>
		);
	}
}

export default GitHubComponent;
