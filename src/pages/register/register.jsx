import React from 'react'

class Register extends React.Component {
  render() {
    return (
      <div>
        <form>
          <div className='control input is-primary'>
            <input type='text' name='name' placeholder='Name' />
          </div>
          <div className='control input is-primary'>
            <input className='is-hover' type='text' name='lastname' placeholder='lastName' />
          </div>
          <div className='control input is-primary'>
            <input className='is-hover' type='email' name='email' placeholder='Email address' required />
          </div>
          <div className='control input is-primary'>
            <input className='is-hover' type='password' name='password' placeholder='password' required />
          </div>
          <div>
            <button className='button is-dark'>Register</button>
          </div>
        </form>
      </div>
    )
  }
}

export default Register
