import React from 'react'
import '../styles/Choose.css'
import { useNavigate } from 'react-router-dom'
import {AiFillShopping, AiOutlineScan} from 'react-icons/ai'

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
            <div style={{ display:'inline-flex', alignItems: 'center' }} className="choose-2" onClick={GoToScanner}>Wanna Shop by Scanning QR &nbsp;<AiOutlineScan /></div> 
            <h3>OR</h3>
            <div style={{ display:'inline-flex', alignItems: 'center' }} className="choose-3" onClick={GoToShop}>Wanna Shop by Checking All Products &nbsp; <AiFillShopping /></div> 
        </div>

    </div>
  )
}
