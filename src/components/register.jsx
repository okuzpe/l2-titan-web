import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/imgs/castle.png'
import Image from './imageRegister'


export default function Register() {
 
  const handleSubmit =  (event) => {
    event.preventDefault()
}


  return (
    <div className='form-container box'>
      <div>
        <div className='title'>
          <Image src={logo} alt={logo} width={400} height={400}> </Image>
        </div>
        <form onSubmit={handleSubmit}>
          <div className='container'>
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
          <div className='container'>
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
          <div className='container'>
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
          <div className='container'>
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
