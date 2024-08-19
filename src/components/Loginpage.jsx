import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Loginpage = () => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  async function handleLogin(ev){
    ev.preventDefault();
    try{
      await axios.post('/login', {email,password});
      alert('Login Successful');
    } catch(e){
      alert('Login failed!! Try again');
    }
  }
  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-64">
        <h1 className="text-4xl text-center mb-4">Login</h1>
        <form className='max-w-md mx-auto' onSubmit={handleLogin}>
          <input type="email" placeholder={'youremail@xyz.com'} 
                 value={email}
                 onChange={ev => setEmail(ev.target.value)}/>
          <input type="password" placeholder={'password'}
                 value={password} 
                 onChange={ev => setPassword(ev.target.value)}/>
          <button className="primary">Login</button>
          <div className="text-center py-2 text-gray-500">
            Don't have an account yet? <Link className="underline text-black" to={'/register'}>Register Here</Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Loginpage;
