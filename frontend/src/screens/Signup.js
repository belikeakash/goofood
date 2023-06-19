import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/Signup.css'

export default function Signup() {
    let navigate = useNavigate();
    const [credentials, setCredentials] = useState({name:'', email:'', password: '', geolocation:''})
    const handleSubmit = async(e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:5000/api/createuser', {
            method:'POST',
            headers: {
                "Content-Type" : 'application/json'
            },
            body:JSON.stringify({name:credentials.name, email:credentials.email, password:credentials.password, location :credentials.geolocation})

            

        })
        const json = await response.json();
        console.log(json);
        if(!json.success) {
            alert('Enter Valid Cred')
        }
        navigate('/login');
    }
    const onChange = (e) => {
        setCredentials({
            ...credentials, [e.target.name]:e.target.value
        })
    }
    return (
        <div className='signup-0'>
            <div className="signup-1">
                <form onSubmit={handleSubmit}>
                    <div className="signup-2">
                        <label htmlFor="name" className="form-label"> Name</label>
                        <input type="text" className="signup-3" name='name' value={credentials.name} onChange={onChange} />
                    </div>
                    <div className="signup-2">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="signup-3" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' value={credentials.email} onChange={onChange} />
                        <div id="emailHelp" className="signup-4">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="signup-2">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="signup-3" id="exampleInputPassword1" name='password' value={credentials.password} onChange={onChange} />
                    </div>

                    <div className="2">
                        <label htmlFor="exampleInputPassword1" className="form-label">Address</label>
                        <input type="text" className="signup-3" id="exampleInputPassword1" name='geolocation' value={credentials.geolocation} onChange={onChange} />
                    </div>

                    <div className="signup-7">
                    <button type="submit" className="signup-6" onClick={handleSubmit}>Submit</button>
                    </div>
                </form>
                <Link to='/login' className='signup-5'>Already a user</Link>

            </div>

        </div>
    )
}
