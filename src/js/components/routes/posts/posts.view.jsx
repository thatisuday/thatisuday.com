import React from 'react';
import Loader from 'react-loader-spinner';

// posts route view
export const PostsView = ( props ) => {
    return (
        <div className='ui-posts'>

            {/* posts list */}
            <div className='ui-posts__list'>
                {
                    props.posts.map( project => {
                        return (
                            <a key={ project.id } href={ project.url } target='_blank' className='ui-posts__list__item'>
                                <div className='ui-posts__list__item__title'>{ project.title }</div>
                                <div className='ui-posts__list__item__description'>{ project.description }</div>
                            </a>
                        );
                    } )
                }
            </div>

            {/* explore more */}
            <a className='ui-posts__explore' target='_blank' href='http://medium.com/@thatisuday'>
                Explore More
            </a>
        </div>
    );
};

// default props
PostsView.defaultProps = {
    posts: [],
};

// set display name
PostsView.displayName = 'PostsView';

/*******************/

// posts route preloader view
export const PostsPreloaderView = () => {
    return (
        <div className='ui-posts-preloader'>
            <Loader
                type="TailSpin"
                color="#000"
                height={ 100 }
                width={ 100 }
            />
        </div>
    );
};

// default props
PostsPreloaderView.defaultProps = {};

// set display name
PostsPreloaderView.displayName = 'PostsPreloaderView';
