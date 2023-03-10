import React, { useEffect, useState } from 'react'
import { CartState } from './Context';

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

                <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "360px" }}>
                    <img src={props.imgSrc} className="card-img-top" style={{ height: '120px', objectFit: 'fill' }} alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{props.name}</h5>
                        <h6>Price: {props.price}</h6>
                    </div>
                    <input type="text" value={qty} placeholder='Enter Quantity' onChange={(e)=> {setQty(e.target.value)}} />
                    <hr />
                    <button className='btn btn-success justify-center ms-2' onClick={handleAddtoCart}>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}
