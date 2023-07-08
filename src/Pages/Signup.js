import React from 'react'
import '../Style/signup.css'
import { Link, useNavigate } from 'react-router-dom'
import validation from '../SignupValidation'
import { useState } from 'react'
import axios from 'axios'
import { Modal } from 'react-bootstrap'
import { Button } from 'bootstrap'
export default function Signup() {
  const [show,setShow] = useState();
  const [user, setUser] = useState({
    fname: '',
    lname: '',
    email: '',
    password: ''
  })
  const navigate = useNavigate();
  const [err, setErr] = useState([]);
  const handleInput = (event) => {
    setUser(prev => ({ ...prev, [event.target.name]: [event.target.value] }))
  }

  const handleSubmit = (event) => {
    debugger;
    event.preventDefault();
    console.log(user);
    setErr(validation(user));
    if (err.fname === "" && err.lname === "" && err.email === "" && err.password === "") {
      //   console.log("inside calling method");
      axios.post('http://localhost:5000/signup', user)
        .then(res => {
          setShow(true);
        })
        .catch(res => console.log(err))
    }
  }

  const handleShow =()=> setShow(true);
  const handleClose =()=>{
    setShow(false);
    navigate('/login');
  }
  return (
    <div className='signup-form' style={{ "marginTop": "5%" }}>
      <form action="" method="post" onSubmit={handleSubmit}>
        <h2 style={{ "color": "rgb(4, 4, 229)" }}>Register</h2>
        <p className="hint-text">Create your account. It's free and only takes a minute.</p>
        <div className="form-group">
          <div className="row">
            <div className="col"><input type="text" className="form-control" name="fname" placeholder="First Name" onChange={handleInput} /></div>
            {err.fname && <span className='text-danger'>{err.fname}</span>}
            <div className="col"><input type="text" className="form-control" name="lname" placeholder="Last Name" onChange={handleInput} /></div>
            {err.lname && <span className='text-danger'>{err.lname}</span>}
          </div>
        </div>
        <div className="form-group">
          <input type="email" className="form-control" name="email" placeholder="Email" onChange={handleInput} />
          {err.email && <span className='text-danger'>{err.email}</span>}
        </div>
        <div class="form-group">
          <input type="password" class="form-control" name="password" placeholder="Password" onChange={handleInput} />
          {err.password && <span className='text-danger'>{err.password}</span>}
        </div>
        <div class="form-group">
          <label class="form-check-label"><input type="checkbox" required="required" /> I accept the <a href="#">Terms of Use</a> &amp; <a href="#">Privacy Policy</a></label>
        </div>
        <div class="form-group">
          <button type="submit" class="btn btn-lg btn-block register-btn">Register Now</button>
        </div>

        {/* register popup */}
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Signup successfully</Modal.Title>
          </Modal.Header>
          <Modal.Body>Now you are registered on this site</Modal.Body>
          <Modal.Footer>
            <button class="btn btn-sm btn-primary" style={{"padding":"5px 20px 5px"}} onClick={handleClose}>
              Ok
            </button>
          </Modal.Footer>
        </Modal>
      </form>
      <div class="text-center">Already have an account? <Link to="/login">Sign in</Link></div>

    </div>

  )
}
