import React from 'react'

function Login() {
  const handleChange = () => {
    // const { name, value } = e.target
    // this.setState({ [name]: value })
  }

  const handleSubmit = () => {}

  return (
    <div>
      <form onSubmit={handleSubmit()}>
        <div className='control input is-primary'>
          <input
            className='input is-hover'
            type='email'
            name='email'
            placeholder='Email address'
            required
            onChange={handleChange()}
          />
        </div>
        <div className='control input is-primary'>
          <input
            className='input is-hover'
            type='password'
            name='password'
            placeholder='password'
            required
            onChange={handleChange()}
          />
        </div>
        <div>
          <button className='button is-dark' onSubmit={handleSubmit()}>
            Log in
          </button>
        </div>
      </form>
    </div>
  )
}

export default Login
