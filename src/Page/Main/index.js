import './style.css';
import { useState } from 'react'

function Main() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  return (

    <div className="container">

      <div className='box'>
        <h1>login</h1>

        <input
          type='text'
          placeholder='Type your e-mail'
          value={email}
        />

        <input
          type='password'
          placeholder='type your password'
          value={password}
        />

      </div>



    </div>
  );
}

export default Main;
