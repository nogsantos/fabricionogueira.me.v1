import React, { Component } from "react";

import axios from "axios";
import { setupCache } from "axios-cache-adapter";

import PostViewComponent from "./postViewComponent";

const cache = setupCache({
    maxAge: 31536000
});

const api = axios.create({
    adapter: cache.adapter
});
/**
 *
 *
 * @class PostView
 * @extends {Component}
 */
class PostView extends Component {
    /**
     * Creates an instance of PostView.
     * @param {any} props
     * @memberof PostView
     */
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            subtitle: "",
            content: "",
            relatedPosts: [],
            isLoading: true
        };
    }
    /**
     *
     *
     * @memberof PostView
     */
    componentDidMount() {
        api({
            url: `https://apisite.fabricionogueira.me/wp-json/wp/v2/posts/${
                this.props.match.params.id
            }`,
            method: "get"
        }).then(response => {
            this.setState({
                title: response.data.title.rendered,
                subtitle: response.data.excerpt.rendered,
                content: response.data.content.rendered,
                relatedPosts: response.data["jetpack-related-posts"],
                isLoading: !this.state.isLoading
            });
        });
    }
    /**
     *
     *
     * @returns
     * @memberof PostView
     */
    render() {
        return <PostViewComponent content={this.state} />;
    }
}

export default PostView;
