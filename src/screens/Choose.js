import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Choose() {
    const navigate = useNavigate();
    function GoToScanner() {
        navigate('/barhome')
    }
    function GoToShop() {
        navigate('/')
    }
  return (
    <div>
        <div className="">
            <div className="" onClick={GoToScanner}>Wanna Shop by Scanning QR</div> 
            <h3>OR</h3>
            <div className="" onClick={GoToShop}>Wanna Shop by Checking All Products</div> 
        </div>

    </div>
  )
}
