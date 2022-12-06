import React from 'react'

export default function Register() {
  return (
    <div className='form-container'>
      <div>
        <form>
          <div>
            <h3>Register</h3>
          </div>
          <div>
            <input className='input is-hover' type='text' name='name' placeholder='Name' defaultValue='' />
          </div>
          <div>
            <input className='input is-hover' type='password' name='password' placeholder='Password' defaultValue='' />
          </div>
          <div>
            <input className='input is-hover' type='text' name='email' placeholder='Email' defaultValue='' />
          </div>
          <div>
            <input className='input is-hover' type='text' name='nickname' placeholder='Nickname' defaultValue='' />
          </div>
          <div>
            <button className='button is-link'>Register</button>
          </div>
        </form>
      </div>
    </div>
  )
}
