import { useState } from "react";
import { useZxing } from "react-zxing";

const BarcodeScanner = () => {
  const [result, setResult] = useState("");
  const { ref } = useZxing({
    onResult(result) {
      setResult(result.getText());
    },
  });

  return (
    <div >
      <div className="" style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
      <video ref={ref} style={{width:'300px', border:'10px solid red'}} />
      
      </div>
      <p style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
        <span>Last result:</span>
        <span>{result}</span>
      </p>
    </div>
  );
};

export default BarcodeScanner;