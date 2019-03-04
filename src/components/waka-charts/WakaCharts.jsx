import React, { Component, Fragment } from 'react';

class WakaCharts extends Component {
	render() {
		return (
			<Fragment>
				<div className="row">
					<h3>My code activities</h3>
				</div>
				<div className="row">
					<div className="col s12 m12 xl6">
						<figure>
							<embed src="https://wakatime.com/share/@nogsantos/3e486b92-5afa-4bb6-a4fd-8de3e546938d.svg" />
						</figure>
					</div>
					<div className="col s12 m12 xl6">
						<figure>
							<embed src="https://wakatime.com/share/@nogsantos/d94cfb7a-d879-4de4-91a0-40d886361d3a.svg" />
						</figure>
					</div>
				</div>
				<div className="row">
					<div className="col s12 m12 xl6">
						<figure>
							<embed src="https://wakatime.com/share/@nogsantos/aaaf45b2-dfc2-4f8d-a54c-dde2e49d95a9.svg" />
						</figure>
					</div>
					<div className="col s12 m12 xl6">
						<figure>
							<embed src="https://wakatime.com/share/@nogsantos/22ada21c-f9ba-4c5b-8e43-9060e7d9e2e2.svg" />
						</figure>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default WakaCharts;
