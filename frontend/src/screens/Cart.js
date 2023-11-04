import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Cart.css'
import {AiFillShopping, AiTwotoneDelete} from 'react-icons/ai'

import { CartState } from '../components/Context';
import Navbar from '../components/Navbar';
export default function Cart() {
  const navigate = useNavigate();
    const {state, dispatch} = CartState();
    const data = state;
  if (data.length === 0) {
    return (
      <div>
        <Navbar />
        <div className='empty' style={{ alignItems: 'center', justifyContent:'center'}}>The Cart is Empty! Lets Do Shopping &nbsp; </div>
        <br />
        <br />
        <Link to='/pickproduct'>
        <div style={{color:'#84adff', display:'flex', justifyContent:'center', fontSize:'10vw'}}><AiFillShopping /></div>
        </Link>
      </div>
    )
  }

  const handleCheckOut = async () => {
    navigate('/checkout')
  }

  let totalPrice = data.reduce((total, food) => total + food.price, 0)
  return (
    <div className="">
      <Navbar />
      <div className='cart-0'>

{console.log(data)}
<div className='cart-1' >
  <table className='cart-2 '>
    <thead className='cart-2'>
      <tr>
        <th scope='col' >#</th>
        <th scope='col' >Name</th>
        <th scope='col' >Quantity</th>
        <th scope='col' >Amount</th>
        <th scope='col' ></th>
      </tr>
    </thead>
    <tbody>
      {data.map((food, index) => (
        <tr>
          <th scope='row' >{index + 1}</th>
          <td >{food.name}</td>
          <td>{food.qty}</td>
          <td>{food.price}</td>
          <td ><div style={{color:'#ff3e3e'}} className="cart-9"><div onClick={() => { dispatch({ type: "REMOVE", index: index }) }} ><AiTwotoneDelete /></div></div> </td></tr>
      ))}
    </tbody>
  </table>
  <br />
  <br />
  <div><h1 className='cart-3' style={{color:'#84adff'}}>Total Price: {totalPrice}/-</h1></div>
  <div className='cart-4'>
    <button className='cart-5' onClick={handleCheckOut} > Check Out </button>
  </div>
</div>



</div>
    </div>
  )
}