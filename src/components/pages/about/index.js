import React, { Component } from "react";

import DocumentTitle from "react-document-title";
import axios from "axios";
import { setupCache } from "axios-cache-adapter";

import { Title, Loading } from "../../template/system";
import { AppConf } from "../../../utils/constants";
import AboutComponent from "./AboutComponent";

const cache = setupCache({
    maxAge: 31536000
});

const api = axios.create({
    adapter: cache.adapter
});

/**
 * About component
 *
 * @class About
 * @extends {Component}
 */
class About extends Component {
    /**
     * Defining static class params
     */
    static params = {
        title: "Fabricio Nogueira",
        subtitle: "Sobre"
    };
    /**
     * Creates an instance of About.
     * @param {any} props
     * @memberof About
     */
    constructor(props) {
        super(props);

        this.state = {
            content: "",
            isLoading: true
        };
    }
    /**
     *
     *
     * @memberof About
     */
    componentDidMount() {
        api({
            url: "https://apisite.fabricionogueira.me/wp-json/wp/v2/pages/180",
            method: "get"
        }).then(response => {
            const posts = response.data.content.rendered;
            this.setState({
                content: posts,
                isLoading: !this.state.isLoading
            });
        });
    }
    /**
     *
     *
     * @returns
     * @memberof About
     */
    render() {
        let colors = {
            bg: "green lighten-3",
            text: "green-text text-darken-4",
            subtext: "green-text text-darken-2"
        };
        return (
            <section>
                <DocumentTitle
                    title={AppConf.name + " » " + About.params.subtitle}
                />
                <Title
                    title={About.params.title}
                    subtitle={About.params.subtitle}
                    colors={colors}
                />
                {this.state.isLoading ? (
                    <Loading />
                ) : (
                    <AboutComponent content={this.state.content} />
                )}
            </section>
        );
    }
}
export default About;
