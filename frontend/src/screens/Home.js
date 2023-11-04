import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import Navbar from '../components/Navbar'
import { storeId } from './SelectStore'
import '../styles/Home.css'
import {BiSearchAlt} from 'react-icons/bi'

export default function Home() {
  const [search, setSearch] = useState('')
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);
  let storeData;
  if (storeId === 1) {
    storeData = '';
  }
  else if (storeId === 2) {
    storeData = '2';
  }
  const url = `http://localhost:5000/api/foodData${storeData}`
  // console.log('url', url);
  const loadData = async () => {
    console.log(url);
    let response = await fetch(url, {
      method: "POST", headers: {
        'Content-Type': 'application/json'
      }
    })
    response = await response.json();
    console.log(response[0], response[1]);
    setFoodItem(response[0]);
    setFoodCat(response[1]);
  }
  useEffect(() => {
    loadData()
  },[])
  return (
    <div>
      <Navbar />
      <div className="home-x-top">
      <div className="home-x" >
      <br />
      <div className='home-1' style={{ display:'flex', alignItems: 'center', justifyContent:'center' }}>
                       <input style={{backgroundColor: '', color:'white', height:'30px'}} className="home-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e) => { setSearch(e.target.value) }} /> 
                  

      </div>
      <br />
      <div className="home-3-top">
      <div className='home-3'>
        {
          foodCat != [] ? foodCat.map((data) => {
            return (<div className="home-4">
              <hr style={{margin:'20px 5vw'}} className='hr-class' />
              <h2 style={{margin:'10px 5vw', textAlign:'center', color:'#2460a7ff'}} key={data._id} className='home-5'>{data.CategoryName}</h2>
              <hr style={{margin:'20px 5vw'}} className='hr-class' />
              <div className="home-6" style={{display:'flex', flexWrap:'wrap', justifyContent:'space-around'}}>
              {foodItem != [] ? foodItem.filter((item) => item.CategoryName === (data.CategoryName) && (item.name.toLowerCase().includes(search))).map(filterItems => {
                return (
                  <div key={filterItems._id} className="home-7" style={{ }}>
                    <Card _id={filterItems._id} name={filterItems.name}
                      price={filterItems.Price}
                      imgSrc={filterItems.img}
                    />
                  </div>
                )
              })
                : <div className="home">"No such data exist"</div>}
              </div>
            </div>
            )
          }) : ""
        }
      </div>
      </div>
      </div>
      {/* <Footer /> */}
      </div>
    </div>
  )
}
