import './App.css'; 
import Home from './screens/Home';
import Home2 from './screens/UsingBarcode/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './screens/Login';
import Signup from './screens/Signup';
import { Context } from './components/Context';
import Cart from './screens/Cart';
import {BarcodeScanner} from './screens/SelectStore';
import Choose from './screens/Choose';
import Checkout from './screens/Checkout';

function App() {
  return (
    <Context>

    <Router>
      <div> 
        <Routes>
          <Route expath path='/' element={<Home />} />  
          <Route expath path='/login' element={<Login />} />
          <Route expath path='/createuser' element={<Signup />} />
          <Route expath path='/cart' element={<Cart />} />
          <Route expath path='/selectstore' element={<BarcodeScanner />} />
          <Route expath path='/pickproducts' element={<Home2 />} />
          <Route expath path='/choose' element={<Choose />} />
          <Route expath path='/checkout' element={<Checkout />} />
        </Routes>  
      </div>
    </Router>
    </Context>
  );
}

export default App;
