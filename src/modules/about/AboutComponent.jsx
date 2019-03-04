import React, { Component } from 'react';

class AboutComponent extends Component {
	render() {
		return (
			<div className="content">
				<div dangerouslySetInnerHTML={{ __html: this.props.content }} />
			</div>
		);
	}
}

export default AboutComponent;
