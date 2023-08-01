import './style.css';
import { useState } from 'react'
import openEye from '../../Assests/open-eye.svg'
import closeEye from '../../Assests/close-eye.svg'



function Main() {

  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const [form, setForm] = useState([{
    email: '',
    password: ''

  }])

  function clearForm() {
    setError('');
    setSuccess('');
    setShowPassword(false)

    setForm({
      email: '',
      password: ''
    })

  }

  function handleSubmit(event) {
    event.preventDefault()

    setError('')
    setSuccess('')

    if (!form.email) {
      setError('Type in your email...')
      return
    }

    if (!form.password) {
      setError('Type in your password...')
      return
    }
    if (form.password.length < 8) {
      setError('Your password should contain at least 8 characters ')
      return
    }

    clearForm()
    setSuccess(`Welcome, ${form.email}!`)
    console.log('submit')
  }


  function handleChangeForms(e) {
    const value = e.target.value
    setForm({ ...form, [e.target.id]: value })
  }

  return (

    <div className="container">

      {success !== '' ? <span className='success'>{success}</span> : ''}
      {error !== '' ? <span className='error'>{error}</span> : ''}


      <form onSubmit={handleSubmit}>
        <h1>login</h1>

        <input
          type='text'
          placeholder='Type your e-mail'
          id='email'
          value={form.email}
          onChange={(event) => handleChangeForms(event)}
        />


        <div className='password'>

          <img
            src={showPassword ? openEye : closeEye}
            alt='show password'
            onClick={() => setShowPassword(!showPassword)}
          />

          <input
            type={showPassword ? 'text' : 'password'}
            placeholder='type your password'
            id='password'
            value={form.password}
            onChange={(event) => handleChangeForms(event)}
          />

        </div>

        <button type='submit'>Log in</button>

      </form>



    </div>
  );
}

export default Main;
