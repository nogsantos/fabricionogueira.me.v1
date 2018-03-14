import React, {Component} from 'react';

import DocumentTitle from 'react-document-title';
import axios from 'axios';
import { setupCache } from 'axios-cache-adapter';

import {Title, Loading} from '../../template/system';
import {BtnLoading} from '../../template/buttons';
import {AppConf} from '../../../utils/constants';
import PostComponent from './PostComponent';

const cache = setupCache({
    maxAge: 31536000
});

const api = axios.create({
    adapter: cache.adapter
});

/**
 * Post component
 *
 * @class Post
 * @extends {Component}
 */
class Post extends Component {
    /**
     * Defining static class params
     */
    static params = {
        title: 'Fabricio Nogueira',
        subtitle: 'Posts & Portfolio',
    };
    /**
     * Creates an instance of Post.
     * @param {any} props
     * @memberof Post
     */
    constructor(props){
        super(props);

        this.items_per_page = 5;
        this.state = {
            content: [],
            loading: false,
            isLoading: true,
            total_items: 1,
            total_page: 1,
            offset: 0,
            current_page: 1,
        };

    }
    /**
     * Initial loading posts
     *
     * @memberof Post
     */
    componentDidMount() {
        this.getPosts();
    }
    /**
     *
     *
     * @memberof Post
     */
    getPosts = () => {
        api({
            url: `https://apisite.fabricionogueira.me/wp-json/wp/v2/posts?per_page=${this.items_per_page}&offset=${this.state.offset}`,
            method: 'get'
        }).then(response => {
            const posts = response.data;
            this.setState({
                content: posts,
                isLoading: !this.state.isLoading,
                current_page: 1,
                offset: 0,
                total_items: response.headers['x-wp-total'],
                total_page: response.headers['x-wp-totalpages'],
            });
        });
    }
    /**
     * Increment page
     *
     * @memberof Post
     */
    loadMorePosts = () => {
        this.setState({
            current_page: this.state.current_page + 1,
            offset: this.state.offset + 5,
        }, this.updateProps);
    }
    /**
     * Updating props
     *
     * @memberof Post
     */
    updateProps = () => {
        this.setState({
            loading: !this.state.loading,
        });
        api({
            url: `https://apisite.fabricionogueira.me/wp-json/wp/v2/posts?per_page=${this.items_per_page}&offset=${this.state.offset}`,
            method: 'get'
        }).then(response => {
            const posts = response.data;
            this.setState({
                content: posts,
                loading: !this.state.loading,
            });
        });
    }
    /**
     *
     *
     * @memberof Post
     */
    DataRender = () => {
        return (
            <section>
                <PostComponent content={this.state.content}/>
                {
                    (this.state.current_page <= this.state.total_page) ?
                        <BtnLoading
                            loading={this.state.loading}
                            onClick={() => this.loadMorePosts()}
                            className="btn green lighten-3" />
                    : ''
                }
            </section>
        )
    }
    /**
     *
     *
     * @returns
     * @memberof Post
     */
    render() {
        let colors = {
            bg: 'yellow lighten-3',
            text: 'yellow-text text-darken-4',
            subtext: 'yellow-text text-darken-2',
        }
        return (
            <section>
                <DocumentTitle title={AppConf.name +' » '+Post.params.title} />
                <Title title={Post.params.title} subtitle={Post.params.subtitle} colors={colors} />
                {
                    this.state.isLoading ?  <Loading /> :  <this.DataRender />
                }
            </section>
        );
    }
}
export default Post;
