import { useState } from 'react'
import { Link } from 'react-router-dom'

const initialForm = {
  email: '',
  password: '',
}
function Login() {
  const handleSubmit = (e) => {
    e.preventDefault()
    // validateForm() TODO
    console.log(contactInfo)
  }
  // const validateForm = () => {} //TODO

  const [contactInfo, setContactInfo] = useState(initialForm)

  const handleChange = (e) => {
    setContactInfo({ ...contactInfo, [e.target.name]: e.target.value })
  }

  return (
    <div className='form-container box'>
      <form onSubmit={handleSubmit}>
        <div className='field'>
          <p className='control has-icons-left has-icons-right'>
            <input
              className='input'
              type='email'
              placeholder='Email'
              onChange={(e) => handleChange(e)}
            />
            <span className='icon is-small is-left'>
              <i className='fas fa-envelope'></i>
            </span>
            <span className='icon is-small is-right'>
              <i className='fas fa-check'></i>
            </span>
          </p>
        </div>
        <div className='field'>
          <p className='control has-icons-left'>
            <input
              className='input'
              type='password'
              placeholder='Password'
              onChange={(e) => handleChange(e)}
            />
            <span className='icon is-small is-left'>
              <i className='fas fa-lock'></i>
            </span>
          </p>
        </div>
        <div className='field is-grouped  is-grouped-centered'>
          <p className='control'>
            <button className='button is-info'>Login</button>
          </p>
          <p className='control'>
            <Link to='/home' className='button is-light'>
              Back
            </Link>
          </p>
        </div>
      </form>
    </div>
  )
}

export default Login
