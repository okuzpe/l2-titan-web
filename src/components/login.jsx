import { useState } from 'react'

export default function Login(addContact) {


const handleSubmit = (event) => {
  event.preventDefault()

  addContact(contactInfo)

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
      <form  onSubmit={handleSubmit}>
        <div className='hero'>
          <h3 className='hero is-info'>Contact Form</h3>
        </div>
        <div>
          <input className='input is-hover'
            onChange={(e) => handleChange(e)}
            type='text'
            name='name'
            placeholder='Name'
            value={contactInfo.name ?? ''}
            defaultValue= {contactInfo.name}
          />
        </div>
        <div>
          <input className='input is-hover'
            onChange={(e) => handleChange(e)}
            type='email'
            name='email'
            placeholder='Email'
            value={contactInfo.email ?? ''}
            defaultValue={contactInfo.email}
          />
        </div>
        <div>
          <input className='input is-hover'
            onChange={(e) => handleChange(e)}
            type='number'
            name='phonenumber'
            placeholder='Phone Number'
            value={contactInfo.phonenumber ?? ''}
            defaultValue = {contactInfo.phonenumber}
          />
        </div>
        <div>
          <button className='button is-primary'>Submit Contact</button>
        </div>
      </form>
    </div>
  )
}
