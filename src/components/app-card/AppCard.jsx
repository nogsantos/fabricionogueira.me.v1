import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Title, Image, Thumb, NoImage, NoThumb } from './Style';

class AppCard extends Component {
	stringLimit = (text, size) => {
		if (text && text.length > 0) {
			let out = text.substring(0, size);
			return text.length > size ? `${out}...` : out;
		}
		return '';
	};
	/**
	 * Render cover photo
	 *
	 * @memberof AppCards
	 */
	renderCover = img => {
		return img ? <Image src={img} alt="" /> : <NoImage className="grey lighten-1" />;
	};
	/**
	 * Render picture photo
	 *
	 * @memberof AppCards
	 */
	renderPicture = img => {
		return img ? (
			<Thumb src={img} alt="" className="circle responsive-img" />
		) : (
			<NoThumb className="circle grey lighten-1" />
		);
	};

	render() {
		return (
			<div className="row">
				<div className="col s12 m12 l12 xl12">
					<div className="card large">
						<div className="card-image">
							{this.renderCover(this.props.coverphoto)}
							<Title className="card-title flow-text grey-text text-darken-4">{`${this.props.title} the ${
								this.props.class
							}`}</Title>
						</div>
						<div className="card-content">
							<span className="card-title activator grey-text text-darken-4">
								DS {this.props.version}
								<i className="material-icons right">more_vert</i>
							</span>
							<p>{this.stringLimit(this.props.content, 90)}</p>
						</div>
						<div className="card-reveal">
							<p className="card-title grey-text text-darken-4">
								{this.props.title}
								<i className="material-icons right">close</i>
							</p>
							<div className="row valign-wrapper">
								<div className="col s4">{this.renderPicture(this.props.picture)}</div>
								<div className="col s8">
									<span className="black-text">
										{this.props.content}
										<p className="right">
											<Link to={this.props.path}>See more</Link>
										</p>
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default AppCard;
