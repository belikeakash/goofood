import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CartState } from './Context';
import '../styles/Navbar.css'
import { BsFillCartFill } from 'react-icons/bs'

export default function Navbar() {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("authToken");
        navigate('/login')
    }
    const movetoCart = () => {
        navigate('/cart')
    }
    const { state, dispatch } = CartState()
    return (
        <div className='navbar-0'>

            <div className="navbar-1">
                <div className="navbar-2"><Link to="/">DQueue</Link></div>
                <div className="navbar-3">
                    <div className="navbar-9">
                        <Link className="" to="/pickproducts">Scan 🔍</Link>
                        {
                        localStorage.getItem("authToken") ? <div className="navbar-4">
                            <Link className=" " to="/selectstore">Store 🛍️</Link>
                        </div> :
                            " "

                    }
                    </div>
                    
                    {
                        !localStorage.getItem("authToken") ?
                        <div className="navbar-9">
                             <div className='navbar-4'> <Link className="" to="/login">Login</Link> </div>
                            <div className="navbar-4"><Link className="" to="/createuser">Signup</Link></div> 
                        </div> :
                            <div className='navbar-9'>
                                <div className="navbar-4" onClick={movetoCart}>
                                    🛒
                                </div>
                                <div className="navbar-4" onClick={handleLogout}>
                                    Logout
                                </div>
                            </div>
                    }
                </div>
            </div>
        </div>
    )
}
