import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { storeId } from './BarcodeScreen'

export default function Home() {
  const [search, setSearch] = useState('')
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);
  let storeData;
  if(storeId==1) {
    storeData = '';
  }
  else if(storeId==2) {
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
    setFoodCat(response[1]);
  }
  useEffect(() => {
    loadData()
  }, [])
  return (
    <div>
      <Navbar />
      <div>
        <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel" style={{ objectFit: "contain !important" }}>

          <div class="carousel-inner" id='carousel' >
            <div className="carousel-caption" style={{ zIndex: 10 }}>
              <div class="d-flex justify-content-center" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e)=>{setSearch(e.target.value)} } />
                
              </div>
            </div>
            <div class="carousel-item active">
              <img src="https://source.unsplash.com/random/900×700/?fruit" style={{ filter: "brightness(30%" }} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src="https://source.unsplash.com/random/900×700/?fruit" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src="https://source.unsplash.com/random/900×700/?fruit" class="d-block w-100" alt="..." />
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className='m-3'>
        {
          foodCat !== [] ? foodCat.map((data) => {
            return (<div className="row mb-3">
              <div key={data._id} className='fs-3 m-3'>{data.CategoryName}</div>
              <hr />
              {foodItem !== [] ? foodItem.filter((item) => item.CategoryName === (data.CategoryName) && (item.name.toLowerCase().includes(search))).map(filterItems => {
                return (
                  <div key={filterItems._id} className="col-12 col-md-6 col-lg-3">
                    <Card _id={filterItems._id} foodName={filterItems.name}
                      options={filterItems.options[0]}
                      imgSrc={filterItems.img}
                    />
                  </div>
                )
              })
                : <div className="">"No such data exist"</div>}
            </div>
            )
          }) : ""
        }
      </div>
      <Footer />
    </div>
  )
}
