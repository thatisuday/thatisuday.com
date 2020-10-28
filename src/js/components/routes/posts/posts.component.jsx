import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// local dependencies
import { getPosts } from 'services/posts.service';
import { PostsView, PostsPreloaderView } from './posts.view';
import { addPosts } from 'store/actions/posts';

/**
 * @desc Posts component.
 */
class _Posts extends React.Component {
    constructor( props ) {
        super( props );

        // component state
        this.state = {
            posts: props.posts,
        };

        // fetch posts
        if( props.posts.length === 0 ) {
            this.fetchPosts();
        }
    }

    // fetch posts
    async fetchPosts() {
        const posts = await getPosts();
        
        // update state
        this.setState( { posts }, () => {
            this.props.addPosts( posts );
        } );
    }

    // render
    render() {
        return this.state.posts.length === 0 ? (
            <PostsPreloaderView />
        ) : (
            <PostsView
                posts={ this.state.posts }
            />
        );
    }
}

// default props
_Posts.defaultProps = {
    posts: [],
};

// set display name
_Posts.displayName = '_Posts';

/********************/

// get store state
const mapStateToProps = ( state ) => {
    return {
        posts: state.posts,
    };
};

// dispatch actions
const mapDispatchToProps = ( dispatch ) => {
    return {
        addPosts: bindActionCreators( addPosts, dispatch ),
    };
};

// export component
export const Posts = connect( mapStateToProps, mapDispatchToProps )( _Posts );

