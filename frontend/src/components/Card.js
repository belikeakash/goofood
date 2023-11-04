import React, { useEffect, useState } from 'react'
import { CartState } from './Context';
import '../styles/Card.css'

export default function Card(props) {
    const { state, dispatch } = CartState();
    // console.log(state);
    
    const [qty, setQty] = useState(1);

    const handleAddtoCart = async () => {
        let data = state
        //console.log('actual', props, 'size', size, 'qty', qty);
        //console.log(data);
        let food = []
        for (const item of data) {
            if (item.id === props._id) {
                food = item;

                break;
            }
        }
        //console.log(food)
        if (food !== []) {
            if (food.name === props.name) {
                await dispatch({ type: "UPDATE", id: props._id, price: qty*(props.price), qty: qty })
                setQty(1)
                return
            }
            else if (food.name !== props.name) {
                await dispatch({ type: "ADD", id: props._id, name: props.name, price: qty*(props.price), qty: qty, size: 0 })
                setQty(1)
                return
            }
            return
        }

        await dispatch({ type: "ADD", id: props._id, name: props.name, price: qty*(props.price), qty: qty, size: 0 })
        setQty(1)

    }
    useEffect(() => {

    }, [])

    const finalPrice = 0
    return (
        <div>
            <div className="">

                <div className="card" style={{ "width": "14rem", "maxHeight": "360px" }}>
                    <img src={props.imgSrc} className="card-img" style={{  }} alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{props.name}</h5>
                        <h5>Price: {props.price}</h5>
                    </div>
                    <div className="" style={{display:'flex', justifyContent:'center'}}>
                    <input  className='input-x' type="text" value={qty} placeholder='Enter Quantity' onChange={(e)=> {setQty(e.target.value)}} />
                    &nbsp;
                    <button className='button' onClick={handleAddtoCart}>+</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
