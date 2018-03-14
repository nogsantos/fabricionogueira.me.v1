import React, { Component } from 'react';
/**
 * HomeComponent component
 *
 * @class HomeComponent
 * @extends {Component}
 */
class HomeComponent extends Component {

    /**
     * Rendering
     *
     * @returns
     * @memberof HomeComponent
     */
    render() {
        return (
            <div className="content">
                <div dangerouslySetInnerHTML={{__html: this.props.content}}></div>
            </div>
        );
    }
}

export default HomeComponent;
