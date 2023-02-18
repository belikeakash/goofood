import React, { useEffect, useState } from 'react'
import { CartState } from './Context';

export default function Card(props) {
    const {state, dispatch} = CartState();
    // console.log(state);
    let options = props.options;
    let priceOptions = Object.keys(options);
    const[qty, setQty] = useState(1);
    const[size, setSize] = useState(priceOptions[0]);
    
    const handleAddtoCart = async() => {
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
          if (food.size === size) {
            await dispatch({ type: "UPDATE", id: props._id, price: finalPrice, qty: qty })
            return
          }
          else if (food.size !== size) {
            await dispatch({ type: "ADD", id: props._id, name: props.foodName, price: finalPrice, qty: qty, size: size,img: props.ImgSrc })
            return
          }
          return
        }
    
        await dispatch({ type: "ADD", id: props._id, name: props.foodName, price: finalPrice, qty: qty, size: size })
    
    
    }
    useEffect(() => {
      
    }, [])
    
    const finalPrice = qty*parseInt(options[size]);
    return (
        <div>
            <div className="">

                <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "360px" }}>
                    <img src={props.imgSrc} className="card-img-top" style={{height:'120px', objectFit:'fill'}} alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{props.foodName}</h5>
                        <div className='container w-100'>
                            <select className='m-2 h-100 bg-success rounded' onChange={(e)=> {setQty(e.target.value)}}>
                                {
                                    Array.from(Array(6), (e, i) => {
                                        return (<option key={i + 1} value={i + 1}> {i + 1}  </option>)
                                    })
                                }
                            </select>
                            <select className='m-2 h-100 bg-success rounded' onChange={(e)=> {setSize(e.target.value)}}>

                                {
                                    priceOptions.map((data)=> {
                                        return(
                                            <>
                                            <option key={data} value={data}>{data}</option>
                                            </>
                                        )
                                    })
                                }
                            </select>
                            <div className="d-inline h-100 fs-5">Total Price : {finalPrice}</div>
                        </div>
                        <hr />
                        <button className='btn btn-success justify-center ms-2' onClick={handleAddtoCart}>Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
