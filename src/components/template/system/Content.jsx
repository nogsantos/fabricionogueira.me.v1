import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import DocumentTitle from "react-document-title";
import Title from "./Title";
import { AppConf } from "../../../utils/constants";

import Home from "../../pages/home/index";
import Post from "../../pages/post/index";
import PostView from "../../pages/post/postView";
import About from "../../pages/about/index";
import Github from "../../pages/github/index";
/**
 * Main Content component
 *
 * @class Content
 * @extends {Component}
 */
class Content extends Component {
    /**
     * Render
     *
     * @returns
     * @memberof Content
     */
    render() {
        return (
            <Switch
                onUpdate={() => window.scrollTo(0, 0)}
                className="col s12 m12 l12 xl12 center-on-small-only"
            >
                <Route exact path="/" component={Home} />
                <Route exact path="/posts" component={Post} />
                <Route exact path="/post/:id" component={PostView} />
                <Route exact path="/about" component={About} />
                <Route exact path="/github" component={Github} />
                <Route component={NoMatch} />
            </Switch>
        );
    }
}
/**
 * When the route does't match
 *
 * @param {*} param0
 */
const NoMatch = ({ location }) => (
    <section>
        <DocumentTitle title={AppConf.name + " » not-found"} />
        <Title title="404" subtitle="Not found" />
        <div className="content">
            Desculpe, o recurso <code>{location.pathname}</code> não foi
            localizado.
        </div>
    </section>
);

export default Content;
