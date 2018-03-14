import React, { Component } from 'react';

import { Collection, CollectionItem } from 'react-materialize';
import styled from 'styled-components';
import media from 'styled-media-query';

import {
    Title,
    Loading,
} from '../../template/system';

const Avatar = styled.div`
    position:absolute;
    top: 40px;
    right: 5%;
    z-index: 999;
    text-align: center;
    ${media.lessThan("medium") `
        display: hidden !important;
    `}
`;

const Thumb = styled.img`
    max-width: 180px !important;
`;

const Badge = styled.span`
    margin: 5px;
    padding: 5px;
`;
/**
 * GitHub JSX component
 *
 * @class GitHubComponent
 * @extends {Component}
 */
class GitHubComponent extends Component {
    /**
     * Creates an instance of GitHubComponent.
     * @param {any} props
     * @memberof GitHubComponent
     */
    constructor(props) {
        super(props);

        this.state = {
            name: 'Carregando...',
            bio: 'Por favor aguarde.',
            avatar: '',
            url: '',
            location: '',
            repositories: [],
        }
    }
    /**
     *
     *
     * @memberof GitHubComponent
     */
    componentWillReceiveProps() {
        this.setState((prevState, props) => {
            return {
                name: props.user.name,
                bio: props.user.bio,
                avatar: props.user.avatarUrl,
                location: props.user.location,
                url: props.user.url,
                repositories: props.user.repositories.edges,
            };
        });
    }
    /**
     *
     *
     * @memberof GitHubComponent
     */
    DataRender = props => {
        const {
            avatar,
            location,
            url,
            repositories,
        } = this.state;
        return (
            <div className="content">
                <Avatar className="hide-on-small-only">
                    {
                        avatar ?
                            <a href={url} target="_blank">
                                <Thumb src={avatar} alt="" className="circle responsive-img" />
                            </a>
                            : ''
                    }
                    <p><small className="grey-text text-lighten-5">{location}</small></p>
                </Avatar>
                <div className="row">
                    <div className="col s12" id="repositoriesList">
                        <Collection>
                            {
                                repositories.map(rep => {
                                    return (
                                        <CollectionItem href={rep.node.url} key={rep.node.id}>
                                            <h5>{rep.node.name}</h5>
                                            <p>{rep.node.description}</p>
                                            {
                                                rep.node.repositoryTopics.edges.map(item => {
                                                    return (
                                                        <small key={item.node.topic.id}>
                                                            <Badge className="blue lighten-3 white-text">{item.node.topic.name}</Badge>
                                                        </small>
                                                    )
                                                })
                                            }
                                        </CollectionItem>
                                    )
                                })
                            }
                        </Collection>
                    </div>
                </div>
            </div>
        );
    }
    /**
     *
     *
     * @returns
     * @memberof GitHubComponent
     */
    render() {
        let colors = {
            bg: 'grey darken-4',
            text: 'grey-text text-lighten-5',
            subtext: 'grey-text text-lighten-5',
        }
        return (
            <section>
                <Title title={this.state.name} subtitle={this.state.bio} colors={colors} />
                {
                    this.props.loading ? <Loading /> : <this.DataRender />
                }
            </section>
        )
    }
}

export default GitHubComponent;
