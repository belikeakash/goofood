import './App.css'; 
import Home from './screens/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './screens/Login';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import Signup from './screens/Signup';
import { Context } from './components/Context';
import Cart from './screens/Cart';
import {BarcodeScanner} from './screens/BarcodeScreen';

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
          <Route expath path='/barcode' element={<BarcodeScanner />} />
        </Routes>  
      </div>
    </Router>
    </Context>
  );
}

export default App;
