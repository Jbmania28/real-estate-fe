import React, { useEffect, useState } from 'react'
import '../Style/profile.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Profile() {
   const [fname,setFname] = useState();
   const [lname, setLname] = useState();
    const navigate = useNavigate();
   useEffect(()=>{
    let token = JSON.parse(localStorage.getItem('token'));
    axios.post('http://localhost:5000/profile',null,{
        headers:{
            'Authorization':`bearer ${token}`
        }
    })
    .then(res =>{
     if(res.data.result){
        navigate('/profile');
     } else{
        navigate('/login');
     }
    })
    .catch(err => console.log(err))
  },[])

  useEffect(()=>{
    let userId = JSON.parse(localStorage.getItem('id'));
    axios.get(`http://localhost:5000/getUserById?id=${userId}`)
    .then(res=>{
          console.log(res.data.data[0].fname)
          setFname(res.data.data[0].fname)
          setLname(res.data.data[0].lname)
          
    }).catch(err => console.log(err))
  })

  return (
    <div>
        <div class="container mt-5 profile-container">
    
    <div class="row d-flex justify-content-center">
        
        <div class="col-md-7">
            
            <div class="card p-3 py-4">
                
                <div class="text-center">
                    
                    <img src="https://www.freeiconspng.com/uploads/png-file-png-file-png-file-png-file-png-file-27.png" width="100" alt="Profile Icon Png" class="rounded-circle border"/>
                </div>
                
                <div class="text-center mt-3">
                    <span class="bg-secondary p-1 px-4 rounded text-white">
                       {
                         fname === 'jayesh' ? 'Admin' : 'User'
                       }
                        </span>
                    <h5 class="m-3">{fname} {lname}</h5>
                    <span>Software Engineer</span>
                    
                    <div class="px-4 mt-1">
                        <p class="fonts">Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    
                    </div>
                    
                     <ul class="social-list">
                        <li><i class="fa fa-facebook"></i></li>
                        <li><i class="fa fa-dribbble"></i></li>
                        <li><i class="fa fa-instagram"></i></li>
                        <li><i class="fa fa-linkedin"></i></li>
                        <li><i class="fa fa-google"></i></li>
                    </ul>
                    
                    <div class="buttons">
                        
                        <button class="btn btn-outline-primary px-4">Message</button>
                        <button class="btn btn-primary px-4 ms-3">Contact</button>
                    
                    </div>
                </div>
                
            </div>
            
        </div>
        
    </div>
    
</div>
    </div>
  )
}
