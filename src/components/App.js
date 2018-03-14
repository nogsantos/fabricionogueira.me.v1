import React, {Component} from 'react';
import config from 'react-global-configuration';

import {
    Nav,
    Footer,
    Content
} from './template/system';
/**
 * Defining the template
 *
 * @class App
 * @extends {Component}
 */
class App extends Component {
    /**
     * Creates an instance of App.
     * @memberof App
     */
    constructor(){
        super();

        config.set({
            syscolor: {
                bg: 'grey lighten-3',
                bgaux: 'grey lighten-3',
                text: 'grey-text text-darken-2',
                subtext: 'grey-text text-darken-1',
            }
        });
    }
    /**
     *
     *
     * @returns
     * @memberof App
     */
    render() {
        return (
            <article className="app-container">
                <header>
                    <Nav />
                </header>
                <main>
                    <Content />
                </main>
                <footer className="page-footer docs-footer">
                    <Footer />
                </footer>
            </article>
        );
    }
}

export default App;
