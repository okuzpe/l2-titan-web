import React from 'react'
import { Link } from 'react-router-dom'

export default function Register() {

  return (
    <div className='form-container box'>
      <div>
        <form>
          <div className='columns'>
            <div>
              <input
                className='input is-hover'
                type='text'
                name='name'
                placeholder='Name'
                defaultValue=''
              />
            </div>
          </div>
          <div className='columns'>
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
          <div className='columns'>
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
          <div className='columns'>
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
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
