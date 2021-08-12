import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = ({ currentUser }) => {
    return(
    <nav>
        <NavLink to='/questions'>Questions Index</NavLink>
        |
        { currentUser ? (
            <React.Fragment> 
                {/* The React Fragment allows us to write components beside each other without wrapping
                them in a parent container.  This stops us from messing with the layout and keeps the
                Navlinks as direct children of the <nav>.  The short form is <> </> */}
                <NavLink to='/questions/new'>New Question</NavLink>
                -
                <span>Welcome, {currentUser.first_name}</span>
            </React.Fragment>
        ) : (
            <NavLink to='sign_in'>Sign In</NavLink>
        )
    }
    </nav>
    )
}

export default NavBar

