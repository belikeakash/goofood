import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Login.css'

export default function Login() {
  let navigate = useNavigate();
  const [credentials, setCredentials] = useState({ email: '', password: '' })
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/api/loginuser', {
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
        
        <form onSubmit={handleSubmit} style={{border: '2px solid #84adff', padding:'20px', borderRadius: '10px'}}>
        {/* <h2 style={{display:'flex', justifyContent:'center', color:'#e53935'}}>WELCOME TO DQUEUE</h2> */}
        <h2 class="wavy" style={{display:'flex', justifyContent:'center', color: '#84adff'}}>
          <span className="apple1">L</span>
          <span className="apple2">O</span>
          <span className="apple3">G</span>
          <span className="apple4">I</span>
          <span className="apple6">N</span>
          <span className="apple6">.</span>
          <span className="apple7"></span>
          <span className="apple8">.</span>
          <span className="apple9">.</span>
        </h2>
        <br />
        <br />
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
