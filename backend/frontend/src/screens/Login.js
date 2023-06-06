import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Login.css'

export default function Login() {
  let navigate = useNavigate();
  const [credentials, setCredentials] = useState({ email: '', password: '' })
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('https://goofood-q3aa.vercel.app//api/loginuser', {
      method: 'POST',
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify({ email: credentials.email, password: credentials.password, })
    })
    const json = await response.json();
    console.log(JSON.stringify({ email: credentials.email, password: credentials.email, }));
    console.log(json);
    if (!json.success) {
      alert('Enter Valid Cred')
    }
    if(json.success) {
      localStorage.setItem("authToken", json.authToken)
      console.log(localStorage.getItem("authToken"));
      navigate('/selectstore')
    }
  }
  const onChange = (e) => {
    setCredentials({
      ...credentials, [e.target.name]: e.target.value
    })
  }
  return (

    <>
      <div className="login-0">
        <form onSubmit={handleSubmit}>

          <div className="login-1">
            <label htmlFor="exampleInputEmail1" className="login-2">Email address</label>
            <input type="email" className="login-3" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' value={credentials.email} onChange={onChange} />
            <div id="emailHelp" className="login-4">We'll never share your email with anyone else.</div>
          </div>
          <div className="login-1">
            <label htmlFor="exampleInputPassword1" className="login-2">Password</label>
            <input type="password" className="login-3" id="exampleInputPassword1" name='password' value={credentials.password} onChange={onChange} />
          </div>


          <div className="login-9">
          <button type="submit" className="login-7">Submit</button>
          </div>
          
          <Link to='/createuser' className='login-8'>I'm a new user</Link>
        </form>
        

      </div>
    
    </>
  )
}
