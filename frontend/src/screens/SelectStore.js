import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useZxing } from "react-zxing";
import '../styles/SelectStore.css'
import Navbar from "../components/Navbar";
import {AiOutlineScan, AiFillHome} from 'react-icons/ai'

let storeId = 1;

const BarcodeScanner = () => {
  const navigate = useNavigate();
  const [result, setResult] = useState("NO STORE SELECTED");
  const { ref } = useZxing({
    onResult(result) {
      setResult(result.getText());
      storeId = result.text[result.text.length - 1];
      console.log(result);
      console.log(storeId);
    },
  });
  function handleGoToStore () {
    localStorage.setItem("store", result)
    navigate('/choose')
  }
  return (
    <div className="">
      <Navbar />
      <div className="selectstore-0" >
      <div className="selectstore-1" style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
      <video ref={ref} style={{width:'300px', borderRadius: '10px' , border:'2px solid #84adff'}} />
      
      </div>
      <div className="selectstore-2" style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
        {
          result==='NO STORE SELECTED' ? <h3 style={{ display:'inline-flex', alignItems: 'center' }}> {" "}<AiOutlineScan /> &nbsp; SCAN YOUR STORE</h3> : <div className="selectstore-3">
            <h3>You have entered <div style={{textTransform:'Uppercase'}}>{result}</div></h3>
            <button className="selectstore-4" onClick={handleGoToStore}>Proceed to Products</button>
          </div>
        }
      </div>
    </div>
    </div>
  );
};

export {BarcodeScanner, storeId};