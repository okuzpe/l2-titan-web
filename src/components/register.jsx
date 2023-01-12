import React from 'react'
import { Link } from 'react-router-dom'
import Image from './imageRegister'
import '../assets/css/index.css'

export default function Register() {
  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <div className='container'>
      <div>
        <div className=' registerPage'>
          <Image>
            {' '}
          </Image>
        </div>
        <form onSubmit={handleSubmit}>
          <div className='section'>
            <div>
              <input
                className='input is-hover is-three-quarters'
                type='text'
                name='name'
                placeholder='Name'
                defaultValue=''
              />
            </div>
          </div>
          <div className='section is-gapless'>
            <div>
              <input
                className='input is-hover'
                type='password'
                name='password'
                placeholder='Password'
                defaultValue=''
              />
            </div>
          </div>
          <div className='section'>
            <div>
              <input
                className='input is-hover'
                type='text'
                name='email'
                placeholder='Email'
                defaultValue=''
              />
            </div>
          </div>
          <div className='section'>
            <div>
              <input
                className='input is-hover'
                type='text'
                name='nickname'
                placeholder='Nickname'
                defaultValue=''
              />
            </div>
          </div>
          <div className='field is-grouped  is-grouped-centered'>
            <div>
              <p className='control'>
                <button className='button is-link'>Register</button>
              </p>
            </div>
            <div>
              <p className='control'>
                <Link to='/home' className='button is-light'>
                  Back
                </Link>
              </p>
              <br/>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
