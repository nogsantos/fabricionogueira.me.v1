import React, { Component } from 'react';

import { WakaCharts } from '../../components';

class HomeComponent extends Component {
	render() {
		return (
			<div className="content">
				<div dangerouslySetInnerHTML={{ __html: this.props.content }} />
				<WakaCharts />
			</div>
		);
	}
}

export default HomeComponent;
