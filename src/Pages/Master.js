import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import '../Style/master.css'
import logo from '../assets/logo.png'
import { useNavigate } from 'react-router-dom'
export default function Master(props) {
  const navigate = useNavigate();
 const username = localStorage.getItem('username')
 function handleLogout(){
     debugger;
     localStorage.clear();
     alert("logged out successfully");
     window.location.href = '/login';
 }

  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div class="container">
        <div class="d-flex flex-grow-1">
            <span class="w-100 d-lg-none d-block">
           </span>
            <Link class="navbar-brand d-none d-lg-inline-block" to="/"><img src={logo} alt="logo" width="120" /></Link>
            <Link class="navbar-brand-two mx-auto d-lg-none d-inline-block me-5" to="/" style={{"textDecoration":"none",color:"white"}}>
                <img src={logo} alt="logo" width="100" />
            </Link>
            <div class="w-100 text-right">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#myNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </div>
        </div>
        <div class="collapse navbar-collapse flex-grow-1 text-right" id="myNavbar">
            <ul class="navbar-nav ms-auto">
            <li className="nav-item">
                  <Link className="nav-link" to="#">Residencies</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#">Our Value</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="contactus">Contact Us</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="login">Sign In</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="signup">Sign Up</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" onClick={handleLogout}>Log out</Link>
                </li>
                <li className="nav-item" to="profile">
                <div className='mt-2 ms-5'>
                 <span className='user-icon'><svg xmlns="http://www.w3.org/2000/svg" height="1em"  viewBox="0 0 448 512">
                  <path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"/>
                </svg></span></div>
                
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="profile" style={{"color":"white"}}>Hello, {username}</Link>
                </li>
            </ul>
            <span>
              
            </span>
        </div>
    </div>
</nav>

        {/* <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
          <div className="container">
            <div className='d-flex'>
            <div>
            <Link className="navbar-brand" to="/"> <h1>Homyz</h1> </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
              <span className="navbar-toggler-icon"></span>
            </button>
            </div>
            <div className=''>
            <div className="collapse navbar-collapse p-2" id="collapsibleNavbar">
              <ul className="navbar-nav ">
                <li className="nav-item">
                  <Link className="nav-link" to="#">Residencies</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#">Our Value</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="contactus">Contact Us</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="login">Sign In</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="signup">Sign Up</Link>
                </li>
                <li className="nav-item">
                <button type="button" class="btn btn-primary">Contact</button>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="">{username}</Link>
                </li>
              </ul>
            </div>
            </div>
            </div>
          </div>
        </nav> */}
      
      <div className='pt-5'>
        <Outlet/>
        </div>
    </>
  )
}
