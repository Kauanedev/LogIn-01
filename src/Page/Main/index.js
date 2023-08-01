import './style.css';
import { useState } from 'react'

function Main() {

  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const [form, setForm] = useState([{
    email: '',
    password: ''

  }])


  function handleChangeForms(e) {
    const value = e.target.value
    setForm({ ...form, [e.target.id]: value })
  }

  function handleSubmit(event) {
    event.preventDefault()

    setError('')
    setSuccess('')

    if (!form.password) {
      setError('Type in your password...')
      return
    }
    if (form.password.length < 8) {
      setError('Your password should contain at least 8 characters ')
      return
    }

    setSuccess('Your register was successful!')
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
          value={form.email}
          onChange={(event) => handleChangeForms(event)}
        />

        <input
          type={showPassword ? 'text' : 'password'}
          placeholder='type your password'
          value={form.password}
          onChange={(event) => handleChangeForms(event)}
        />

        <div>
          <input
            type='checkbox'
            name='show password'
            checked={showPassword}
            onChange={() => setShowPassword(!showPassword)}
          />

          {/* <label htmlFor='show-password'>Show password</label> */}
        </div>

        <button type='submit'>Log in</button>

      </form>



    </div>
  );
}

export default Main;
