import React from "react";
import DocumentTitle from "react-document-title";

import { graphql } from "react-apollo";
import gql from "graphql-tag";

import { AppConf } from "../../../utils/constants";
import GitHubComponent from "./GitHubComponent";
/**
 * Render
 *
 * @param {*} param0
 */
const GitHub = ({ data: { loading, error, user } }) => {
    return (
        <section>
            <DocumentTitle title={AppConf.name + " » GitHub"} />
            {error ? (
                <h1>Error fetching posts!</h1>
            ) : (
                <GitHubComponent user={user} loading={loading} />
            )}
        </section>
    );
};
/**
 *  Query
 */
const QUERY = gql`
    query User($login: String!, $first: Int) {
        user(login: $login) {
            avatarUrl
            name
            bio
            location
            url
            repositories(
                isLocked: false
                isFork: false
                privacy: PUBLIC
                first: $first
                orderBy: { field: CREATED_AT, direction: DESC }
            ) {
                edges {
                    node {
                        id
                        name
                        description
                        url
                        repositoryTopics(first: $first) {
                            edges {
                                node {
                                    topic {
                                        id
                                        name
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;
/**
 * Query configurations
 */
const CONFIG_QUERY = {
    options: props => ({
        variables: {
            skip: 0,
            first: 100,
            login: "nogsantos"
        },
        notifyOnNetworkStatusChange: true
    })
};
/**
 * Quering
 */
export default graphql(QUERY, CONFIG_QUERY)(GitHub);
