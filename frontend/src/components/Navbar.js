import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CartState } from './Context';
import '../styles/Navbar.css'
import { BsFillCartFill, BsCartFill } from 'react-icons/bs'
import {BiLogIn} from 'react-icons/bi'
import {AiOutlineScan, AiFillHome} from 'react-icons/ai'

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
                <div className="navbar-2"><Link to="/">DQUEUE</Link></div>
                <div className="navbar-3">
                    <div className="navbar-9">
                        <Link className="" to="/pickproducts"><AiOutlineScan/></Link>
                        {
                        localStorage.getItem("authToken") ? <div className="navbar-4">
                            <Link className=" " to="/selectstore"><AiFillHome /></Link>
                        </div> :
                            " "

                    }
                    </div>
                    
                    {
                        !localStorage.getItem("authToken") ?
                        <div className="navbar-9">
                             <div className='navbar-4'> <Link className="" to="/login"><BiLogIn /></Link> </div>
                        </div> :
                            <div className='navbar-9'>
                                <div className="navbar-4" onClick={movetoCart}>
                                <BsCartFill style={{cursor:'pointer'}} />
                                </div>
                                <div className="navbar-4" onClick={handleLogout}>
                                    <BiLogIn style={{cursor:'pointer'}} />
                                </div>
                            </div>
                    }
                </div>
            </div>
        </div>
    )
}
