import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import {
  FaDev,
  FaGithub
} from 'react-icons/fa';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              <FaDev className='navbar-icon' />
              RDev
            </Link>
          </div>
          <small className='website-rights'>RDev © 2020</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link'
              to={
                '//www.github.com/RvonGlahn'
              }
              target='_blank'
              aria-label='Github'
            >
              <FaGithub />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
