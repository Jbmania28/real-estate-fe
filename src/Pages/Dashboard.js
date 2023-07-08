import React, { useEffect } from 'react'
import '../Style/dashboard.css'
import hero from '../assets/hero-image.png'
import equinix from '../assets/equinix.png'
import prologics from '../assets/prologis.png'
import realty from '../assets/realty.png'
import tower from '../assets/tower.png'
import prpty1 from '../assets/prpty1.png'
import prpty2 from '../assets/prpty2.png'
import prpty3 from '../assets/prpty3.png'
import value from '../assets/value.png'
import contact from '../assets/contact.jpg'
import { Button, Col, Container, Form, Row } from "react-bootstrap"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
export default function Dashboard() {
  const navigate = useNavigate();
  // useEffect(()=>{
  //   axios.get('http://localhost:5000')
  //   .then(res =>{
  //    if(res.data.valid){
  //     navigate('/');
  //    }else{
  //     navigate('/login');
  //    }
  //   })
  //   .catch(err => console.log(err))
  // },[])

  return (
    <>
    <div className="dashboard-banner">
      <div className="container ">
        <div className="row banner-container gx-5">
          <div className="col-md-6">
            <div className='title-container ms-5'>
              <div className='white-circle'></div>
              <h1 className=''>Discover <br />
                Most Suitable <br/>
                Property</h1>

              <p className='pt-4'>Find a variety of properties that suit you very easilty <br />
                Forget all difficulties in finding a residence for you</p>

              <div class="pt-4">
                <div class="search">
                  <i class="fa fa-search"></i>
                  <input type="text" class="form-control" />

                  <button class="btn btn-primary" style={{"color":"white"}}>Search</button>

                </div>
              </div>

              <div className='record pt-5'>
                <div className="row">
                  <div className="col">
                    <span>9,000 <span style={{ color: "orange" }}>+</span></span>
                    <p>Premium Product</p>
                  </div>
                  <div className="col">
                    <span>2,000 <span style={{ color: "orange" }}>+</span></span>
                    <p>Happy Customer</p>
                  </div>
                  <div className="col">
                    <span>28 <span style={{ color: "orange" }}>+</span></span>
                    <p>Awards Winning</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 text-center">
            <img src={hero} alt="hero-image" height="550px" width="440px" className='banner-img ' />
          </div>
        </div>
      </div>
      </div>

      <div className="container pt-4">
        <div className="row">
          <div className="col-md-3 mt-md-0 mt-3 text-center ">
            <img src={equinix} alt="" height="100px" width="160px" />
          </div>
          <div className="col-md-3 mt-md-0 mt-3 text-center ">
            <img src={realty} alt="" height="100px" width="160px" />
          </div>
          <div className="col-md-3 mt-md-0 mt-3 text-center ">
            <img src={prologics} alt="" height="100px" width="160px" />
          </div>
          <div className="col-md-3 mt-md-0 mt-3 text-center ">
            <img src={tower} alt="" height="100px" width="160px" />
          </div>
        </div>
      </div>

      <div className="container mt-5 ">
        <div className="row">

          <div className="col ms-3">
            <span style={{ color: "orange", fontSize: "1.5rem", fontWeight: "bold" }}>Best Choices</span> <br />
            <strong style={{ color: "rgb(3, 3, 121)", fontSize: "1.7rem" }}>Popular Residencies</strong>
          </div>
          <div className="col">

          </div>
        </div>
        <div className="row mt-4 p-3 residencies">
          <div className="col-md-2 mt-md-0 mt-2">
            <div class="card" style={{ width: "18rem;" }}>
              <img src={prpty1} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title" style={{ fontSize: "1.5rem", fontWeight: "bold" }}><span style={{ color: "orange" }}>$</span> 35,853</h5>
                <span class="card-text" style={{ fontSize: "1.5rem", fontWeight: "bold", color: "rgb(3, 3, 121)" }}>Citralan Puri Serang</span>
                <p className='class-text' style={{ fontSize: "0.8rem" }}>Ruko Puri Indah Resident Block A7, <br />Lingkar Street, Ciracas, Serang, Banten</p>
              </div>
            </div>
          </div>
          <div className="col-md-2 mt-md-0 mt-2">
            <div class="card" style={{ width: "18rem;" }}>
              <img src={prpty2} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title" style={{ fontSize: "1.5rem", fontWeight: "bold" }}><span style={{ color: "orange" }}>$</span> 47,655</h5>
                <span class="card-text" style={{ fontSize: "1.5rem", fontWeight: "bold", color: "rgb(3, 3, 121)" }}>Aliva Priva Jardin</span>
                <p className='class-text' style={{ fontSize: "0.8rem" }}>Ruko Puri Indah Resident Block A7, <br />Lingkar Street, Ciracas, Serang, Banten</p>
              </div>
            </div>
          </div>
          <div className="col-md-2 mt-md-0 mt-2">
            <div class="card" style={{ width: "18rem;" }}>
              <img src={prpty3} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title" style={{ fontSize: "1.5rem", fontWeight: "bold" }}><span style={{ color: "orange" }}>$</span> 64,000</h5>
                <span class="card-text" style={{ fontSize: "1.5rem", fontWeight: "bold", color: "rgb(3, 3, 121)" }}>Citralan Puri Serang</span>
                <p className='class-text' style={{ fontSize: "0.8rem" }}>Ruko Puri Indah Resident Block A7, <br />Lingkar Street, Ciracas, Serang, Banten</p>
              </div>
            </div>
          </div>
          <div className="col-md-2 mt-md-0 mt-2">
            <div class="card" style={{ width: "18rem;" }}>
              <img src={prpty1} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title" style={{ fontSize: "1.5rem", fontWeight: "bold" }}><span style={{ color: "orange" }}>$</span> 50,343</h5>
                <span class="card-text" style={{ fontSize: "1.5rem", fontWeight: "bold", color: "rgb(3, 3, 121)" }}>Citralan Puri Serang</span>
                <p className='class-text' style={{ fontSize: "0.8rem" }}>Ruko Puri Indah Resident Block A7, <br />Lingkar Street, Ciracas, Serang, Banten</p>
              </div>
            </div>
          </div>
          <div className="col-md-2 mt-md-0 mt-2">
            <div class="card" style={{ width: "18rem;" }}>
              <img src={prpty2} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title" style={{ fontSize: "1.5rem", fontWeight: "bold" }}><span style={{ color: "orange" }}>$</span> 22,000</h5>
                <span class="card-text" style={{ fontSize: "1.5rem", fontWeight: "bold", color: "rgb(3, 3, 121)" }}>Citralan Puri Serang</span>
                <p className='class-text' style={{ fontSize: "0.8rem" }}>Ruko Puri Indah Resident Block A7, <br />Lingkar Street, Ciracas, Serang, Banten</p>
              </div>
            </div>
          </div>
          <div className="col-md-2 mt-md-0 mt-2">
            <div class="card" style={{ width: "18rem;" }}>
              <img src={prpty3} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title" style={{ fontSize: "1.5rem", fontWeight: "bold" }}><span style={{ color: "orange" }}>$</span> 53,909</h5>
                <span class="card-text" style={{ fontSize: "1.5rem", fontWeight: "bold", color: "rgb(3, 3, 121)" }}>Citralan Puri Serang</span>
                <p className='class-text' style={{ fontSize: "0.8rem" }}>Ruko Puri Indah Resident Block A7, <br />Lingkar Street, Ciracas, Serang, Banten</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className="container">
        <div className="row">
          <div className="col gx-0">
            <img src={value} alt="" height="550px" width="440px" className='value-img' />
          </div>
          <div className="col-md-6 mt-md-0 mt-3 ">
            <span style={{ color: "orange", fontSize: "1.7rem", fontWeight: "600" }}>Our Value</span> <br />
            <span style={{ color: "rgb(3, 3, 121)", fontSize: "1.8rem", fontWeight: "bold" }}>Value We Give to You</span> <br />
            <span className='text-muted' >We always ready to help by providijng the best services for you. <br />
              We beleive a good blace to live can make your life better</span>

            <div class="accordion mt-5" id="accordionExample">
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  <span className='' style={{ "padding": "7px 12px 10px", "backgroundColor":"#d6d4d4","borderRadius":"3px" }}><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0z"/></svg></span>
                  <span className='accordion-txt ms-auto'>Best interest rates on the market</span>
                  </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    <strong>Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.</strong>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"  data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  <span className='' style={{ "padding": "7px 12px 10px", "backgroundColor":"#d6d4d4","borderRadius":"3px" }}><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0z"/></svg></span>
                  <span className='accordion-txt ms-auto'>Prevent unstable prices</span>
                  </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                  <strong>Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.</strong>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree">
                  <button class="accordion-button collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  <span className='' style={{ "padding": "7px 12px 10px", "backgroundColor":"#d6d4d4","borderRadius":"3px" }}><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0z"/></svg></span>
                 
                  <span className='accordion-txt ms-auto'>Best price on the market</span>
                  </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                  <strong className=''>Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5 gx-5">
        <div className="row">
          <div className="col-md-6 ">
            <span style={{ color: "orange", fontSize: "1.7rem", fontWeight: "600" }}>Our Contact Us</span> <br />
            <span style={{ color: "rgb(3, 3, 121)", fontSize: "2rem", fontWeight: "bold" }}>Easy to contact us</span> <br />
            <span className='text-muted' >We always ready to help by providijng the best services for you. We beleive a good blace to <br /> live can make your life better</span>
            <div className="row row-cols-2 mt-5">
              <div className="col-md-6">
                <div class="card ">
                  <div class="card-body">
                    <div className='d-flex'>
                      <div className='contact-grid'><h4>
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" /></svg>
                      </h4></div>
                      <div className='text-center ps-4'>
                        <span style={{ fontWeight: "bold" }}>Call</span>
                        <p>021 123 145 14</p>
                      </div>
                    </div>
                    <div className='grid-btn'>
                      <button type="button" class="btn btn-primary w-100 mt-2">Call now</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div class="card ">
                  <div class="card-body">
                    <div className='d-flex'>
                      <div className='contact-grid'>
                        <h4>
                          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M512 240c0 114.9-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6C73.6 471.1 44.7 480 16 480c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4l0 0 0 0 0 0 0 0 .3-.3c.3-.3 .7-.7 1.3-1.4c1.1-1.2 2.8-3.1 4.9-5.7c4.1-5 9.6-12.4 15.2-21.6c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208z" /></svg>
                        </h4>
                      </div>
                      <div className='text-center ps-4'>
                        <span style={{ fontWeight: "bold" }}>Chat</span>
                        <p>021 123 145 14</p>
                      </div>
                    </div>
                    <div className='grid-btn'>
                      <button type="button" class="btn btn-primary w-100 mt-2">Chat now</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mt-3">
                <div class="card ">
                  <div class="card-body">
                    <div className='d-flex'>
                      <div className='contact-grid'>
                        <h4>
                          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M512 240c0 114.9-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6C73.6 471.1 44.7 480 16 480c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4l0 0 0 0 0 0 0 0 .3-.3c.3-.3 .7-.7 1.3-1.4c1.1-1.2 2.8-3.1 4.9-5.7c4.1-5 9.6-12.4 15.2-21.6c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208z" /></svg>
                        </h4>
                      </div>
                      <div className='text-center ps-4'>
                        <span style={{ fontWeight: "bold" }}>Video call</span>
                        <p>021 123 145 14</p>
                      </div>
                    </div>
                    <div className='grid-btn'>
                      <button type="button" class="btn btn-primary w-100 mt-2">Video call now</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mt-3">
                <div class="card">
                  <div class="card-body">
                    <div className='d-flex'>
                      <div className='contact-grid'> <h4><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64h96v80c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L309.3 416H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64z" /></svg></h4></div>
                      <div className='text-center ps-4'>
                        <span style={{ fontWeight: "bold" }}>Message</span>
                        <p>021 123 145 14</p>
                      </div>
                    </div>
                    <div className='grid-btn'>
                      <button type="button" class="btn btn-primary w-100 mt-2">Message now</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 mt-md-0 mt-4  ">
            <img src={contact} class="contact-img " alt="..." height="550px" width="480px"/>
          </div>
        </div>
      </div>

      <div className='container mt-5 gx-5'>
        <div className="row">
          <div className="col get-started">
            <div class="card">
              <div class="card-body text-center">
                <h2>Get started with Homyz</h2>
                <p className='mt-5'>Subscribe and find super attractive price quotes from us. <br />
                  Find your residence soon</p>
                <button type="button" class="btn btn-warning mt-3">Get Started</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <h3>Homyz</h3>
            <p>Our vision is to make all people
              the best place to live for them.</p>
          </div>
          <div className="col text-end">
           <h3>Information</h3>
           <p>145 New York, FL 5467, USA</p>
           <ul className='bottom-menu'>
            <li>Property</li>
            <li>Sevices</li>
            <li>Product</li>
            <li>About us</li>
           </ul>
          </div>
        </div>
      </div>
    </>
  )
}


