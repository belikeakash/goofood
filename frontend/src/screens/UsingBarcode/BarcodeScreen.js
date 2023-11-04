import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import { useZxing } from "react-zxing";
import { CartState } from '../../components/Context';
import { storeId } from "../SelectStore";
import '../../styles/ProductBarcode.css'
import {BsCartPlusFill} from 'react-icons/bs'



const BarcodeScanner = () => {
  const { state, dispatch } = CartState();
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);
  const [qty, setQty] = useState(1);
  let storeData;
  if (storeId === 1) {
    storeData = '';
  }
  else if (storeId === 2) {
    storeData = '2';
  }
  const url = `http://localhost:5000/api/foodData${storeData}`
  const loadData = async () => {
    console.log(url);
    let response = await fetch(url, {
      method: "POST", headers: {
        'Content-Type': 'application/json'
      }
    })
    response = await response.json();
    // console.log(response[0], response[1]);
    setFoodItem(response[0]);
    console.log(response[0]);
    setFoodCat(response[1]);
  }
  console.log(foodCat);
  useEffect(() => {
    loadData()
    
  },[])
  function getProduct(data) {
    // console.log(foodItem);
    for (let i = 0; i < foodItem.length; i++) {
      if (foodItem[i]._id === data) {
        return foodItem[i];
      }
    }
    return foodItem[0];
  }
  // const navigate = useNavigate();
  const [result, setResult] = useState("NO STORE SELECTED");
  const [pro, setPro] = useState({})
  const { ref } = useZxing({
    onResult(result) {
      setResult(result.getText());
      console.log(result.getText());
      const product = getProduct(result.getText());
      console.log(product);
      //console.log(product.options);
      setPro(product);
    },
  });
  const handleAddtoCart = async () => {
    let data = state
    //console.log('actual', props, 'size', size, 'qty', qty);
    //console.log(data);
    let food = []
    for (const item of data) {
      if (item.id === pro._id) {
        food = item;
        break;
      }
    }
    //console.log(food)
    if (food != []) {
      if (food.name === pro.name) {
        await dispatch({ type: "UPDATE", id: pro._id, price: qty * (pro.Price), qty: qty })
        setQty(1)
        return
      }
      else if (food.name !== pro.name) {
        await dispatch({ type: "ADD", id: pro._id, name: pro.name, price: qty * (pro.Price), qty: qty, size: 0 })
        setQty(1)
        return
      }
      return
    }

    await dispatch({ type: "ADD", id: pro._id, name: pro.name, price: qty * (pro.Price), qty: qty, size: 0 })
    setQty(1)

  }
  // function handleGoToStore() {
  //   navigate('/')
  // }
  return (
    <div className="barcode-0" >
      <div className="" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <video ref={ref} style={{ width: '300px', borderRadius:'10px' , border: '2px solid #84adff' }} />

      </div>
      <div className="barcode-1">
        {
          result === 'NO STORE SELECTED' ? <h1 style={{color:'white'}}>Scan a product</h1> : <div className="barcode-2">
            <div className="barcode-3">Product : {pro.name}</div>
            <div className="barcode-4"> Price : {pro.Price}<div />
              <div className="" style={{ display:'inline-flex', alignItems: 'center', justifyContent:'center' }}>
              <input className="barcode-5" type="text" value={qty} placeholder="Enter Quantity" onChange={(e) => { setQty(e.target.value) }} />
              <button className="barcode-6" onClick={handleAddtoCart}><BsCartPlusFill /></button>
              </div>
            </div>
            </div>
        }
          </div>
    </div>
      );
};

      export {BarcodeScanner, storeId};