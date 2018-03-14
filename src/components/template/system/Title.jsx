import React, { Component } from 'react';
import config from 'react-global-configuration';

import styled from 'styled-components';

const Content = styled.div`
    -webkit-transition: 0.3s;
    -moz-transition: 0.3s;
    -o-transition: 0.3s;
    transition: 0.3s;
    opacity: 0;
`;

/**
 *
 * @class Title
 * @extends {Component}
 */
class Title extends Component {
    /**
     * Creates an instance of Title.
     * @memberof Title
     */
    constructor() {
        super();
        this.colors = config.get('syscolor');
    }
    /**
     *
     *
     * @memberof Title
     */
    componentWillReceiveProps() {
        if (this.props.colors) {
            this.colors = this.props.colors;
        }
        const content = document.getElementById('index-banner');
        content.style.opacity = 1;
        content.style.visibility = 'visible';
    }
    /**
     *
     * @returns
     * @memberof Title
     */
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

export default Title;
