import React from 'react';
import { getPosts } from 'services/posts.service';

// app component view
import { PostsView } from './posts.view';

/**
 * @desc Posts component.
 */
export class Posts extends React.Component {
    constructor( props ) {
        super( props );

        // component state
        this.state = {
            posts: [],
        };

        // fetch posts
        this.fetchPosts();
    }

    // fetch posts
    async fetchPosts() {
        const posts = await getPosts();
        
        // update state
        this.setState( { posts } );
    }

    // render
    render() {
        return this.state.posts.length === 0 ? null : (
            <PostsView
                posts={ this.state.posts }
            />
        );
    }
}
