import React, { useEffect, useState } from 'react'
import Card from '../../components/Card'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import { storeId } from '../BarcodeScreen'
import {BarcodeScanner} from '../UsingBarcode/BarcodeScreen'

export default function Home() {
  
  return (
    <div>
      <Navbar />
      <div>
        <BarcodeScanner />
      </div>
      <Footer />
    </div>
  )
}
