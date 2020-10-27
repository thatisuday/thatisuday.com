import React from 'react';

// posts route component
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
