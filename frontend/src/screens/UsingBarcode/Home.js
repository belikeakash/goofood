import React, { useEffect, useState } from 'react'
import Card from '../../components/Card'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import { storeId } from '../SelectStore'
import {BarcodeScanner} from '../UsingBarcode/BarcodeScreen'

export default function Home() {
  
  return (
    <div>
      <Navbar />
      <div className='pickproducts-0' style={{height:'80vh', display:'flex', alignItems:'center', justifyContent:'center', borderRadius:'10px'}}>
        <BarcodeScanner />
      </div>
      {/* <Footer /> */}
    </div>
  )
}
