import React, { useEffect, useState } from "react";
import { jsPDF } from "jspdf";
import { CartState } from "../components/Context";
import { storeId } from "./SelectStore";
import Navbar from '../components/Navbar'
import '../styles/Checkout.css'
import {BsFillCreditCardFill, BsFillCalendarDateFill} from 'react-icons/bs'
import {MdOutlinePassword} from 'react-icons/md'

export default function App() {
    const [country, setCountry] = useState('India')
    const [symbol, setSymbol] = useState(' ₹')
    const [cvcValue, setcvcValue] = useState('')
    const [expValue, setexpValue] = useState('')
    const [cardValue, setcardValue] = useState('')
    function setCountryValue(country) {
        if(country=='India') {
            setSymbol(' ₹')
        }
        else if(country=='USA') {
            setSymbol('$')
        }
        else if(country=='Italy') {
            setSymbol('€') 
        }
        else if(country=='Australia') {
            setSymbol('$')
        }
        else if(country=='Singapore') {
            setSymbol('$')
        }
    }
    const { state } = CartState();
    console.log(state);
    let totalPrice = 0;
    const CaluclateTotal =() => {
        for (let i = 0; i < state.length; i++) {
            totalPrice+=state[i].price
        }
    }
    function matchCardDetails() {
        if(state.length===0) return 0;
        if(cvcValue==='242' &&  expValue==='24/24' && cardValue==='242424242424') {
            return 1;
        }
        return 0;
    }
    CaluclateTotal()
    function generateSimplePDF() {
        if(!matchCardDetails()) {
            alert('Enter Right Card details or check if cart is empty');
            return;
        }
        const doc = new jsPDF();
        const text = 'HAppy Loadddddingggg'
        const stringStoreId = `STORE-${storeId}` + ''
        const newstate = state;
        doc.text(50, 10, `${stringStoreId}`)
        doc.text(10, 20, 'Item Name');
        doc.text(50, 20, 'Item Quantity');
        doc.text(100, 20, 'Item Price');
        for (let i = 0; i < newstate.length; i++) {
            let data = [newstate[i].name, newstate[i].qty + '', newstate[i].price + ''];
            console.log(data);
            doc.text(10, 20 + (i + 1) * 10, state[i].name);
            doc.text(50, 20 + (i + 1) * 10, state[i].qty + '');
            doc.text(100, 20 + (i + 1) * 10, state[i].price + '');
        }
        const stringPrice = totalPrice+'';
        const stringSymbol = symbol ;
        doc.text(10, 20 + (state.length + 1)*10, `You Paid ${symbol}${stringPrice} at ${stringStoreId}`);
        doc.save("Document.pdf");
        setcardValue('');
        setcvcValue('');
        setexpValue('');
        window.location.reload(true)
    }
    useEffect(()=> {
     console.log('rendered');   
    })
    return (
        <div className="" >
            <Navbar />
            <div className="" style={{display:'flex', justifyContent:'center'}}>
            <div className="checkout-0" style={{border:''}}>
            <div className="checkout-15">You are Shopping in : Store-{storeId}</div> 
            <div className="checkout-15">Your total is : {symbol}{totalPrice}</div>
            <div className="checkout-15">Enter Card Details</div>
            <div className="checkout-1"><BsFillCreditCardFill /></div>
            <input className="checkout-2" type="text" placeholder="1234 1234 1234 1234" value={cardValue} onChange={(e)=>setcardValue(e.target.value)}/>
            <div className="checkout-3" style={{ display: 'flex' }}>
                <div className="checkout-4">
                    <div className="checkout-5"><BsFillCalendarDateFill /></div>
                    <input className="checkout-6" type="text" placeholder="MM / YY" value={expValue} onChange={(e)=>setexpValue(e.target.value)} />
                </div>
                &nbsp;
                <div className="checkout-7">
                    <div className="checkout-8"><MdOutlinePassword /></div>
                    <input className="checkout-9" type="text" placeholder="CVC" value={cvcValue} onChange={(e)=>setcvcValue(e.target.value)} />
                </div>

            </div>
            <div className="checkout-10">
            <div className="checkout-11">Country</div>
            <select name="" id="" onChange={(e)=>{{setCountry(e.target.value)};  setCountryValue(e.target.value); }}>
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="Singapore">Singapore</option>
                <option value="Australia">Australia</option>
                <option value="Italy">Italy</option>
            </select>
            </div>
            

            <button className="checkout-12" onClick={generateSimplePDF}>Pay & Generate Bill</button>
            </div>
        </div>
        </div>
    );
}
