import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import config from 'react-global-configuration';
import { SideNav } from 'react-materialize';

import { MenuIcon, MenuTitle } from './Style';

class AppNav extends Component {
	constructor() {
		super();
		this.color = config.get('syscolor');
		this.menu = [
			{
				path: '/',
				title: 'Home',
				icon: 'home'
			},
			{
				path: '/about',
				title: 'Sobre',
				icon: 'face'
			},
			{
				path: '/posts',
				title: 'Portfolio',
				icon: 'folder_special'
			},
			{
				path: '/github',
				title: 'GitHub',
				icon: 'github_circle'
			}
		];
	}

	ItemMenuRender = () => {
		return (
			<ul>
				{this.menu.map(menu => {
					return (
						<li key={menu.path}>
							<Link to={menu.path}>
								<MenuIcon className="small material-icons left">
									<img src={`/assets/img/ic_${menu.icon}.svg`} alt="" />
								</MenuIcon>
								<MenuTitle className={'grey-text text-darken-1'}>{menu.title}</MenuTitle>
							</Link>
						</li>
					);
				})}
			</ul>
		);
	};

	render() {
		return (
			<Fragment>
				<nav className="hide-on-med-and-up grey darken-4 z-depth-2">
					<SideNav
						trigger={
							<div className="nav-wrapper">
								<button data-activates="mobile-demo" className="btn-flat sidenav-trigger">
									<img src="/assets/img/ic_menu.svg" alt="" />
								</button>
							</div>
						}
						options={{ closeOnClick: true }}
					>
						<this.ItemMenuRender />
					</SideNav>
				</nav>
				<section id="nav-mobile" className={`sidenav sidenav-fixed ${this.color.bgaux}`}>
					<this.ItemMenuRender />
					<div className="sidenav-footer grey lighten-3 z-depth-2">
						<a
							className="twitter-timeline"
							href="https://twitter.com/nogsantos"
							data-dnt="true"
							data-widget-id="248889471817359360"
						>
							@nogsantos
						</a>
						{
							!(function(d, s, id) {
								var js,
									fjs = d.getElementsByTagName(s)[0],
									p = /^http:/.test(d.location) ? 'http' : 'https';
								if (!d.getElementById(id)) {
									js = d.createElement(s);
									js.id = id;
									js.src = p + '://platform.twitter.com/widgets.js';
									fjs.parentNode.insertBefore(js, fjs);
								}
							})(document, 'script', 'twitter-wjs')
						}
					</div>
				</section>
			</Fragment>
		);
	}
}

export default AppNav;
