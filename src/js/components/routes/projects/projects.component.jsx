import React from 'react';
import { getProjects } from 'services/projects.service';

// app component view
import { ProjectsView } from './projects.view';

/**
 * @desc Projects component.
 */
export class Projects extends React.Component {
    constructor( props ) {
        super( props );

        // component state
        this.state = {
            projects: [],
        };

        // fetch projects
        this.fetchProjects();
    }

    // fetch projects
    async fetchProjects() {
        const projects = await getProjects();
        
        // update state
        this.setState( { projects } );
    }

    // render
    render() {
        return this.state.projects.length === 0 ? null : (
            <ProjectsView
                projects={ this.state.projects }
            />
        );
    }
}
