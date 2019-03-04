import React, { Component } from 'react';
import config from 'react-global-configuration';

import { Content } from './Style';

class AppTitle extends Component {
	constructor() {
		super();
		this.colors = config.get('syscolor');
	}

	componentWillReceiveProps() {
		if (this.props.colors) {
			this.colors = this.props.colors;
		}
		const content = document.getElementById('index-banner');
		content.style.opacity = 1;
		content.style.visibility = 'visible';
	}

	render() {
		return (
			<Content className={`section z-depth-2 ${this.colors.bg}`} id="index-banner">
				<div className="row">
					<div className="col s12 m9 l9 xl9 center-on-small-only">
						<h1 className={`header ${this.colors.text}`}>{this.props.title}</h1>
						<h4 className={`header ${this.colors.subtext}`}>{this.props.subtitle}</h4>
					</div>
				</div>
			</Content>
		);
	}
}

export default AppTitle;
