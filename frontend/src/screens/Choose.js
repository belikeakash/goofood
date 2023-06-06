import React from 'react'
import '../styles/Choose.css'
import { useNavigate } from 'react-router-dom'

export default function Choose() {
    const navigate = useNavigate();
    function GoToScanner() {
        navigate('/pickproducts')
    }
    function GoToShop() {
        navigate('/')
    }
  return (
    <div className='choose-0'>
        <div className="choose-1">
            <div className="choose-2" onClick={GoToScanner}>Wanna Shop by Scanning QR 🔍</div> 
            <h3>OR</h3>
            <div className="choose-3" onClick={GoToShop}>Wanna Shop by Checking All Products</div> 
        </div>

    </div>
  )
}
