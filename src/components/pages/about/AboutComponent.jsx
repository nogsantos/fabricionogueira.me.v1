import React, { Component } from "react";
/**
 * About JSX component
 *
 * @class AboutComponent
 * @extends {Component}
 */
class AboutComponent extends Component {
    /**
     * Rendering
     *
     * @returns
     * @memberof AboutComponent
     */
    render() {
        return (
            <div className="content">
                <div dangerouslySetInnerHTML={{ __html: this.props.content }} />
            </div>
        );
    }
}

export default AboutComponent;
