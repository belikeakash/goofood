import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../styles/Cart.css'
// import Delete from '@material-ui/icons/Delete'

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
        <div className='m-5 w-100 text-center fs-3'>The Cart is Empty!</div>
      </div>
    )
  }
  // const handleRemove = (index)=>{
  //   console.log(index)
  //   dispatch({type:"REMOVE",index:index})
  // }

  const handleCheckOut = async () => {
    // let userEmail = localStorage.getItem("userEmail");
    // // console.log(data,localStorage.getItem("userEmail"),new Date())
    // let response = await fetch("http://localhost:5000/api/auth/orderData", {
    //   // credentials: 'include',
    //   // Origin:"http://localhost:3000/login",
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({
    //     order_data: data,
    //     email: userEmail,
    //     order_date: new Date().toDateString()
    //   })
    // });
    // console.log("JSON RESPONSE:::::", response.status)
    // if (response.status === 200) {
    //   dispatch({ type: "DROP" })
    // }
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
        <th scope='col' >Option</th>
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
          <td>{food.size}</td>
          <td>{food.price}</td>
          <td ><button type="button" className="btn p-0"><div onClick={() => { dispatch({ type: "REMOVE", index: index }) }} >Delete</div></button> </td></tr>
      ))}
    </tbody>
  </table>
  <div><h1 className='cart-3'>Total Price: {totalPrice}/-</h1></div>
  <div className='cart-4'>
    <button className='cart-5' onClick={handleCheckOut} > Check Out </button>
  </div>
</div>



</div>
    </div>
  )
}