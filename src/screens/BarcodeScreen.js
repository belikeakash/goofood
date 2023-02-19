import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useZxing } from "react-zxing";

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
    navigate('/')
  }
  return (
    <div >
      <div className="" style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
      <video ref={ref} style={{width:'300px', border:'10px solid red'}} />
      
      </div>
      <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
        {
          result==='NO STORE SELECTED' ? <h1>SELECT A STORE</h1> : <div>
            <h3>You selected {result}</h3>
            <button onClick={handleGoToStore}>Proceed to store</button>
          </div>
        }
      </div>
    </div>
  );
};

export {BarcodeScanner, storeId};