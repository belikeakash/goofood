import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Badge from 'react-bootstrap/Badge'
import { CartState } from './Context';

export default function Navbar() {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("authToken");
        navigate('/login')
    }
    const movetoCart = () => {
        navigate('/cart')
    }
    const {state, dispatch} = CartState()
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-success">
                <div className="container-fluid">
                    <Link className="navbar-brand fs-1 fst-italic" to="/">GooFood</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav me-auto mb-2">
                            <li className="nav-item">
                                <Link className="nav-link " aria-current="page" to="/">Home</Link>
                            </li>
                            {
                                localStorage.getItem("authToken") ? <li className="nav-item">
                                    <Link className="nav-link " aria-current="page" to="/">My Orders</Link>
                                </li> :
                                    " "

                            }
                        </ul>
                        <div className="d-flex">
                            {
                                !localStorage.getItem("authToken") ? <div> <Link className="btn bg-white text-success mx-1" to="/login">Login</Link>
                                    <Link className="btn bg-white text-success mx-1" to="/createuser">Signup</Link> </div> :
                                    <div className="">
                                    <div className="btn bg-white text-success mx-2" onClick={movetoCart}>

                                        My Cart {" "}
                                        
                                    </div>
                                    <div className="btn bg-white text-danger mx-2" onClick={handleLogout}>
                                        Logout
                                    </div>
                                    </div>
                            }
                            


                        </div>



                    </div>
                </div>
            </nav>

        </div>
    )
}
