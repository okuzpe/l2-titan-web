import Image from './image'
import logo from './../assets/imgs/logo-blanco.png'
import { Link } from 'react-router-dom'

const navigation = [
  { name: 'Home', to: '/home' },
  { name: 'Download', to: '/download' },
  { name: 'Server Info', to: '/server-info' },
]
const Logo = () => {
  return (
    <Link className='navbar-item' href='https://bulma.io'>
      <Image src={logo} alt='logo' width={112} height={28} />
    </Link>
  )
}

function NavBar() {
  return (
    <div>
      <nav className='navbar is-dark'>
        <div className='navbar-brand'>
          <Logo />
          <div className='navbar-burger' data-target='navMenuColordark-example'>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div id='navMenuColordark-example' className='navbar-menu'>
          <div className='navbar-start'>
            {navigation.map(({ name, to }, index) => (
              <Link to={to} className='navbar-item' key={index}>
                {name}
              </Link>
            ))}
          </div>

          <div className='navbar-end'>
            <div className='navbar-item'>
              <div className='buttons'>
                <Link to={'login'} className='button  is-info'>
                  <span className='icon'>
                    <i className='fas fa-user'></i>
                  </span>
                  <span>Login</span>
                </Link>
                <Link to={'register'} className='button '>
                  <span className='icon'>
                    <i className='fa-solid fa-lock'></i>
                  </span>
                  <span>Register</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
