import React, { Fragment } from 'react';
import DocumentTitle from 'react-document-title';

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import GitHubComponent from './GitHubComponent';

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
			login: 'nogsantos'
		},
		notifyOnNetworkStatusChange: true
	})
};

const GitHub = ({ data: { loading, error, user } }) => {
	return (
		<Fragment>
			<DocumentTitle title={`${process.env.REACT_APP_NAME} » GitHub`} />
			{error ? <h1>Error fetching posts!</h1> : <GitHubComponent user={user} loading={loading} />}
		</Fragment>
	);
};
/**
 * Quering
 */
export default graphql(QUERY, CONFIG_QUERY)(GitHub);
