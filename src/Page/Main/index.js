import './style.css';
import { useState } from 'react'

function Main() {

  const [form, setForm] = useState([{
    email: '',
    password: ''

  }])


  return (

    <div className="container">

      <div className='box'>
        <h1>login</h1>

        <input
          type='text'
          placeholder='Type your e-mail'
          value={form.email}
        />

        <input
          type='password'
          placeholder='type your password'
          value={form.password}

        />

      </div>



    </div>
  );
}

export default Main;
