import React from 'react';
import {HashLink} from 'react-router-hash-link';

import Twitter from '../image/Twitter.svg';
import Mail from '../image/Mail.svg';
import Redesigner from '../image/Redesigner.svg';

const Footer = () => {
  return (
    <footer>
      <div className="body">
        <div className="nav-area">
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
        <div className="below">
          <ul className="external-link">
            <li>
              <a className='round-icon' href="https://twitter.com/shoh_25"><img src={Twitter} alt="" /></a>
            </li>
            <li>
              <a className='round-icon' href="mailto:koan6210@outlook.jp"><img src={Mail} alt="" /></a>
            </li>
            <li>
              <a className='round-icon' href="https://student.redesigner.jp/students/3a05f4ba1f69c2318a9861f4c331b2d7"><img src={Redesigner} alt="" /></a>
            </li>
          </ul>
          <p className='copyright'>© 2023 Sho Okubo</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer