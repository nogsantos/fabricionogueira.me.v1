import React, { Component, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import DocumentTitle from 'react-document-title';

import { AppTitle } from '../../components';
import { Home, Post, PostView, About } from '../index';
import Github from '../github/index';

/**
 * Main Content Router render component
 *
 * @class Content
 * @extends {Component}
 */
class Content extends Component {
	render() {
		return (
			<Switch onUpdate={() => window.scrollTo(0, 0)} className="col s12 m12 l12 xl12 center-on-small-only">
				<Route exact path="/" component={Home} />
				<Route exact path="/posts" component={Post} />
				<Route exact path="/post/:id" component={PostView} />
				<Route exact path="/about" component={About} />
				<Route exact path="/github" component={Github} />
				<Route component={NoMatch} />
			</Switch>
		);
	}
}
/**
 * When the route does't match
 *
 * @param {*} param0
 */
const NoMatch = ({ location }) => (
	<Fragment>
		<DocumentTitle title={`${process.env.REACT_APP_NAME} » not-found`} />
		<AppTitle title="404" subtitle="Not found" />
		<div className="content">
			Desculpe, o recurso <code>{location.pathname}</code> não foi localizado.
		</div>
	</Fragment>
);

export default Content;
