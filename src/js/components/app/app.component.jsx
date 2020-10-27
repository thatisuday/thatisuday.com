import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// app component view
import { AppView } from './app.view';

/**
 * @desc Entry component of the application single page application.
 */
export class App extends React.Component {
    constructor( props ) {
        super( props );

        // component state
        this.state = {};
    }

    // render
    render() {
        return (
            <Router>
                <AppView />
            </Router>
        );
    }
}
