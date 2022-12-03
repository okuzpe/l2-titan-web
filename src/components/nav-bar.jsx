function NavBar() {
  return (
    <div>
      <nav className='navbar is-dark'>
        <div className='navbar-brand'>
          <a className='navbar-item' href='https://bulma.io'>
            <img
              src='https://bulma.io/images/bulma-logo-white.png'
              alt='Bulma: a modern CSS framework based on Flexbox'
              width='112'
              height='28'
            />
          </a>
          <div className='navbar-burger' data-target='navMenuColordark-example'>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div id='navMenuColordark-example' className='navbar-menu'>
          <div className='navbar-start'>
            <a className='navbar-item' href='https://bulma.io/'>
              Home
            </a>
            <div className='navbar-item has-dropdown is-hoverable'>
              <a className='navbar-link' href='https://bulma.io/documentation/overview/start/'>
                Docs
              </a>
              <div className='navbar-dropdown'>
                <a className='navbar-item' href='https://bulma.io/documentation/overview/start/'>
                  Overview
                </a>
                <a
                  className='navbar-item'
                  href='https://bulma.io/documentation/overview/modifiers/'
                >
                  Modifiers
                </a>
                <a className='navbar-item' href='https://bulma.io/documentation/columns/basics/'>
                  Columns
                </a>
                <a className='navbar-item' href='https://bulma.io/documentation/layout/container/'>
                  Layout
                </a>
                <a className='navbar-item' href='https://bulma.io/documentation/form/general/'>
                  Form
                </a>
                <hr className='navbar-divider' />
                <a className='navbar-item' href='https://bulma.io/documentation/elements/box/'>
                  Elements
                </a>
                <a
                  className='navbar-item is-active'
                  href='https://bulma.io/documentation/components/breadcrumb/'
                >
                  Components
                </a>
              </div>
            </div>
          </div>

          <div className='navbar-end'>
            <div className='navbar-item'>
              <div className='field is-grouped'>
                <p className='control'>
                  <a
                    className='button is-primary'
                    href='https://github.com/jgthms/bulma/releases/download/0.9.4/bulma-0.9.4.zip'
                  >
                    <span className='icon'>
                      <i className='fas fa-download'></i>
                    </span>
                    <span>Download</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar