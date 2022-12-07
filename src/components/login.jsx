import { useState } from 'react'

function log() {
  console.log('holis')
}

export default function Login() {
  const handleSubmit = (event) => {
    event.preventDefault()

    setContactInfo({ name: '', email: '', phonenumber: '' })
  }

  const [contactInfo, setContactInfo] = useState({
    name: '',
    email: '',
    phonenumber: '',
  })

  const handleChange = (event) => {
    setContactInfo({ ...contactInfo, [event.target.name]: event.target.value })
  }

  return (
    <div className='form-container'>
      <form onSubmit={handleSubmit}>
        <div className='hero'>
          <h3 className='hero is-info'>Contact Form</h3>
        </div>
        <div>
          <input
            className='input is-hover'
            onChange={(e) => handleChange(e)}
            type='text'
            name='name'
            placeholder='Name'
          />
        </div>
        <div>
          <input
            className='input is-hover'
            onChange={(e) => handleChange(e)}
            type='email'
            name='email'
            placeholder='Email'
          />
        </div>
        <div>
          <button className='button is-primary' onClick={log}>
            Log in
          </button>
        </div>
      </form>
    </div>
  )
}
