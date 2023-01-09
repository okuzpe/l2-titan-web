import React from 'react';

const Footer = () => {
    return (
      <div>
        <footer className='footer'>
          <div className='columns is-flex-direction-column is-fullheight-100vh'>
            <p className='has-text-centered'>
              <strong>L2 Titan</strong>
            </p>
          </div>
          <div className='level'>
            <button className='button is-primary is-light button is-medium'>
              <i className='fa-brands fa-square-instagram'>
                <p>Follow us on Instagram</p>
              </i>
            </button>
          </div>
          <div className='level'>
            <button className='button is-primary is-light button is-medium'>
              <i className='fa-brands fa-twitter'>
                <p>Follow us on Twitter</p>
              </i>
            </button>
          </div>
          <div className='level'>
            <button className='button is-primary is-light button is-medium'>
              <i className='fa-brands fa-discord'>
                <p>Follow us on Discord</p>
              </i>
            </button>
          </div>
        </footer>
      </div>
    )
};

export default Footer;