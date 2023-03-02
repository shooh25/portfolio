import React from 'react';
import {HashLink} from 'react-router-hash-link';

import Logo from '../image/logo.svg';

const Header = () => {
  return (
    <header>
      <div className="header-body">
        <HashLink to='/#top' className='logo'>
          <img src={Logo} alt="Okubo Sho" />
        </HashLink>
        <nav className='global-nav'>
          <ul>
            <li>
              <HashLink to='/#works' className='link'>WORKS</HashLink>
            </li>
            <li>
              <HashLink to='/#profile' className='link'>PROFILE</HashLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header