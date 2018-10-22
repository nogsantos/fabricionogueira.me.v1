import React, { Component } from "react";
import { Link } from "react-router-dom";

import _ from "lodash";

import { Collection, CollectionItem } from "react-materialize";
/**
 * Post JSX component
 *
 * @class PostComponent
 * @extends {Component}
 */
class PostComponent extends Component {
    /**
     * Creates an instance of PostComponent.
     * @memberof PostComponent
     */
    constructor() {
        super();
        this.posts = [];
        this.state = {
            posts: []
        };
    }
    /**
     *
     *
     * @memberof PostComponent
     */
    componentDidMount() {
        this.posts.push(...this.props.content);
        this.setState({
            posts: [...this.posts]
        });
    }
    /**
     *
     *
     * @memberof PostComponent
     */
    componentWillReceiveProps(nextProps) {
        let diff = _.difference(this.props.content, nextProps.content);
        if (diff.length > 0) {
            this.posts.push(...nextProps.content);
            this.setState({
                posts: [...this.posts]
            });
        }
    }
    /**
     * Rendering
     *
     * @returns
     * @memberof PostComponent
     */
    render() {
        return (
            <div className="content">
                <Collection>
                    {this.state.posts.map(post => {
                        return (
                            <CollectionItem key={post.id}>
                                <Link
                                    to={`post/${post.id}`}
                                    dangerouslySetInnerHTML={{
                                        __html: post.title.rendered
                                    }}
                                />
                                <span
                                    dangerouslySetInnerHTML={{
                                        __html: post.excerpt.rendered
                                    }}
                                />
                            </CollectionItem>
                        );
                    })}
                </Collection>
            </div>
        );
    }
}

export default PostComponent;
