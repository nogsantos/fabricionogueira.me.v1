import React, { Component } from 'react';
import config from 'react-global-configuration';

import { AppNav, AppFooter } from './components';
import Content from './modules/content/Content';

class App extends Component {
	constructor() {
		super();

		config.set({
			syscolor: {
				bg: 'grey lighten-3',
				bgaux: 'grey lighten-3',
				text: 'grey-text text-darken-2',
				subtext: 'grey-text text-darken-1'
			}
		});
	}

	render() {
		return (
			<article className="app-container">
				<header>
					<AppNav />
				</header>
				<main>
					<Content />
				</main>
				<footer className="page-footer docs-footer">
					<AppFooter />
				</footer>
			</article>
		);
	}
}

export default App;
