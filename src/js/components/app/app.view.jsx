import React from 'react';
import { NavLink as Link, Switch, Route } from 'react-router-dom';

// local dependencies
import { About } from 'components/routes/about';
import { Contact } from 'components/routes/contact';

// app component view
export const AppView = () => {
    return (
        <div className='ui-app'>

            {/* logo/header */}
            <div className='ui-app__logo'>
                Uday Hiwarale
            </div>

            {/* navigation */}
            <div className='ui-app__nav'>
                <Link className='ui-app__nav__item' activeClassName='ui-app__nav__item--active' exact to='/'>About</Link>
                <Link className='ui-app__nav__item' activeClassName='ui-app__nav__item--active' to='/posts'>Posts</Link>
                <Link className='ui-app__nav__item' activeClassName='ui-app__nav__item--active' to='/projects'>Projects</Link>
                <Link className='ui-app__nav__item' activeClassName='ui-app__nav__item--active' to='/contact'>Contact</Link>
            </div>

            {/* routes */}
            <div className='ui-app__routes'>
                <Switch>
                    <Route path='/posts'>Posts</Route>
                    <Route path='/projects'>Projects</Route>
                    <Route path='/contact' component={ Contact } />
                    <Route path='/' component={ About } />
                </Switch>
            </div>

            {/* footer */}
            <div className='ui-app__footer'>
                <a className='ui-app__footer__link' href='https://medium.com/@thatisuday' target='_blank'>Medium</a>
                <a className='ui-app__footer__link' href='https://github.com/thatisuday' target='_blank'>GitHub</a>
                <a className='ui-app__footer__link' href='https://twitter.com/thatisuday' target='_blank'>Twitter</a>
                <a className='ui-app__footer__link' href='https://instagram.com/thatisuday' target='_blank'>Instagram</a>
            </div>
        </div>
    );
};

// default props
AppView.defaultProps = {};
