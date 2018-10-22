import React, { Component } from "react";

import { Title, Loading } from "../../template/system";
import { strip_tags } from "../../../utils/functions";
/**
 *
 *
 * @class PostViewComponent
 * @extends {Component}
 */
class PostViewComponent extends Component {
    /**
     * Creates an instance of PostViewComponent.
     * @param {any} props
     * @memberof PostViewComponent
     */
    constructor(props) {
        super(props);
        this.state = {
            title: "Carregando...",
            subtitle: "Por favor aguarde.",
            content: "",
            relatedPosts: [],
            loading: true
        };
    }
    /**
     * Will receive the props
     *
     * @memberof PostViewComponent
     */
    componentWillReceiveProps() {
        this.setState((prevState, props) => {
            return {
                title: props.content.title,
                subtitle: props.content.subtitle,
                content: props.content.content,
                relatedPosts: props.content["jetpack-realted-posts"],
                loading: props.isLoading
            };
        });
    }
    /**
     * Prepare the render
     */
    DataRender = () => {
        return (
            <div className="row">
                <div
                    className="col s12"
                    dangerouslySetInnerHTML={{ __html: this.state.content }}
                />
            </div>
        );
    };
    /**
     * Render
     *
     * @returns
     * @memberof PostViewComponent
     */
    render() {
        let state = this.state;
        return (
            <article>
                <Title
                    title={strip_tags(state.title)}
                    subtitle={strip_tags(state.subtitle)}
                />
                {this.state.loading ? <Loading /> : <this.DataRender />}
            </article>
        );
    }
}

export default PostViewComponent;
