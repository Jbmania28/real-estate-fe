import React, { useState } from 'react'
import '../Style/login.css'
import validation from '../LoginValidation';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


export default function Login() {
  const [user, setUser] = useState({
    email: '',
    password: ''
  })
  const navigate = useNavigate();
  const [err, setErr] = useState([]);
  const [backendErr, setBackendErr] = useState([]);
  const [username, setUsername] = useState();
  const handleInput = (event) => {
    setUser(prev => ({ ...prev, [event.target.name]: [event.target.value] }))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    debugger;
    console.log(user);
    setErr(validation(user));
    if (err.email === "" && err.password === "") {
      //   console.log("inside calling method");
      axios.post('http://localhost:5000/login', user)
        .then(res => {
          if (res.data.err) {
            setBackendErr(res.data.err)
          } else {
            setBackendErr([]);
            if (res.data.login) {
              localStorage.setItem("token", JSON.stringify(res.data.token));
              localStorage.setItem("username", res.data.data[0].fname)
              localStorage.setItem("id", res.data.data[0].id)
              navigate('/');
            } else {
              alert("Invalid username or password");
            }
          }

        })
        .catch(res => console.log(err))
    }
  }
  return (

    <div className=''>
      <div className="d-flex justify-content-center login-container">
        <div className="card login-card" >
          <div className="card-body">
            <h1 className='card-title text-center pb-2' style={{"color":"rgb(4, 4, 229)"}}>
              
              Login
              
              </h1>
            <form action="" onSubmit={handleSubmit}>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" onChange={handleInput} />
                {err.email && <span className='text-danger'>{err.email}</span>}
              </div>
              <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" name="password" onChange={handleInput} />
                {err.password && <span className='text-danger'>{err.password}</span>}
              </div>
              <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" for="exampleCheck1">Check me out</label>
              </div>
              <button type="submit" className="btn btn-primary " style={{"backgroundColor":"rgb(4, 4, 229)"}}>Submit</button>
              <span className='ps-3'>New user ? <Link to="/signup" style={{ color: "rgb(4, 4, 229)" }}>Sign up</Link></span>
            </form>
          </div>
        </div>
      </div>
    </div>

  )
}
