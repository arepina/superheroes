import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <div className='header__nav'>
            <NavLink to='/' activeClassName='activeNav' exact={true}>Dashboard</NavLink>
            <NavLink to='/add' activeClassName='activeNav'>Add Hero</NavLink>
            <NavLink to='/help' activeClassName='activeNav'>Help</NavLink>
        </div>
    </header>
);

export default Header;
