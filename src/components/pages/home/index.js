import React, { Component } from "react";

import DocumentTitle from "react-document-title";
import axios from "axios";
import { setupCache } from "axios-cache-adapter";

import { Title, Loading } from "../../template/system";
import { AppConf } from "../../../utils/constants";
import HomeComponent from "./HomeComponent";

const cache = setupCache({
    maxAge: 31536000
});

const api = axios.create({
    adapter: cache.adapter
});

/**
 * Home component
 *
 * @class Home
 * @extends {Component}
 */
class Home extends Component {
    /**
     * Defining static class params
     */
    static params = {
        title: "Fabricio Nogueira",
        subtitle: "$uname -a"
    };
    /**
     * Creates an instance of Home.
     * @param {any} props
     * @memberof Home
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
     * @memberof Home
     */
    componentDidMount() {
        api({
            url: "https://apisite.fabricionogueira.me/wp-json/wp/v2/pages/11",
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
     * @memberof Home
     */
    render() {
        return (
            <section>
                <DocumentTitle title={AppConf.name + " » Home"} />
                <Title
                    title={Home.params.title}
                    subtitle={Home.params.subtitle}
                />
                {this.state.isLoading ? (
                    <Loading />
                ) : (
                    <HomeComponent content={this.state.content} />
                )}
            </section>
        );
    }
}
export default Home;
