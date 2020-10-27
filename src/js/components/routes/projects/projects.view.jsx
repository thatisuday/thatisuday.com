import React from 'react';

// projects route component
export const ProjectsView = ( props ) => {
    return (
        <div className='ui-projects'>

            {/* projects list */}
            <div className='ui-projects__list'>
                {
                    props.projects.map( project => {
                        return (
                            <a key={ project.id } href={ project.url } target='_blank' className='ui-projects__list__item'>
                                <div className='ui-projects__list__item__title'>{ project.title }</div>
                                <div className='ui-projects__list__item__description'>{ project.description }</div>
                            </a>
                        );
                    } )
                }
            </div>

            {/* explore more */}
            <a className='ui-projects__explore' target='_blank' href='http://github.com/thatisuday'>
                Explore More
            </a>
        </div>
    );
};

// default props
ProjectsView.defaultProps = {
    projects: [],
};
