import React from 'react';
import { NavLink as Link, Switch, Route } from 'react-router-dom';

// contact route component
export const ContactView = () => {
    return (
        <div className='ui-contact'>
            {/* email */}
            <a href='mailto:thatisuday@gmail.com' className='ui-contact__section'>
                <div className='ui-contact__section__title'>Email</div>
                <div className='ui-contact__section__value'>thatisuday@gmail.com</div>
            </a>

            {/* medium */}
            <a href='https://medium.com/@thatisuday' target='_blank' className='ui-contact__section'>
                <div className='ui-contact__section__title'>medium</div>
                <div className='ui-contact__section__value'>@thatisuday</div>
            </a>

            {/* github */}
            <a href='https://github.com/thatisuday' target='_blank' className='ui-contact__section'>
                <div className='ui-contact__section__title'>github</div>
                <div className='ui-contact__section__value'>@thatisuday</div>
            </a>

            {/* twitter */}
            <a href='https://twitter.com/thatisuday' target='_blank' className='ui-contact__section'>
                <div className='ui-contact__section__title'>twitter</div>
                <div className='ui-contact__section__value'>@thatisuday</div>
            </a>

            {/* instagram */}
            <a href='https://instagram.com/thatisuday' target='_blank' className='ui-contact__section'>
                <div className='ui-contact__section__title'>instagram</div>
                <div className='ui-contact__section__value'>@thatisuday</div>
            </a>

            {/* stack overflow */}
            <a href='https://stackoverflow.com/users/2790983/uday-hiwarale' target='_blank' className='ui-contact__section'>
                <div className='ui-contact__section__title'>stack overflow</div>
                <div className='ui-contact__section__value'>@2790983</div>
            </a>
        </div>
    );
};

// default props
ContactView.defaultProps = {};
