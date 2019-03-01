import React from 'react';
import { Link, NavLink } from 'react-router-dom';

class BrowseTopNav extends React.Component {

  render () {
    return (
      <div className='browse-top-nav-container'>
        <ul className='browse-top-nav-links'>
          <li>
            <NavLink className='nav-link' to='/browse/songs'>
              Songs
            </NavLink>
          </li>
        </ul>

    </div>
    );
  }
}

export default BrowseTopNav;