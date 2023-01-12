import React from 'react';
import '../assets/css/index.css'

const Footer = () => {
    return (
      <footer className='footer'>
        <div className='columns is-flex-direction-column is-fullheight-100vh'>
          <p className='has-text-centered'>
            <strong className='footerTitle'>L2 Titan</strong>
          </p>
        </div>
        <div className='level'>
          <button className='button is-link is-outlined is-light button is-medium is-responsive is-rounded'>
            <i className='fa-brands fa-square-instagram'>
              <p>Follow us on Instagram</p>
            </i>
          </button>
          <p className='footerText'>
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum
          </p>
        </div>
        <div className='level'>
          <button className='button is-link is-outlined is-light button is-medium is-responsive is-rounded'>
            <i className='fa-brands fa-twitter'>
              <p>Follow us on Twitter</p>
            </i>
          </button>
          <p>
            {' '}
            <p className='footerText'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum
            </p>
          </p>
        </div>
        <div className='level'>
          <button className='button is-link is-outlined is-light button is-medium is-responsive is-rounded'>
            <i className='fa-brands fa-discord'>
              <p>Follow us on Discord</p>
            </i>
          </button>
          <p className='footerText'>
            {' '}
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum
          </p>
        </div>
      </footer>
    )
};

export default Footer;