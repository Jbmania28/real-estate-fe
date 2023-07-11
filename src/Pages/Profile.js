import React, { useEffect, useState } from 'react'
import '../Style/profile.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faEye } from '@fortawesome/free-regular-svg-icons'
import { Modal } from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import ProfilePopup from '../components/profilePopup'
export default function Profile() {
    const [fname, setFname] = useState();
    const [profileData, setProfileData] = useState([]);
    const [lname, setLname] = useState();
    const [usertable, setUsertable] = useState(false);
    const [userData, setUserData] = useState([]);
    const [show, setShow] = useState(false);
    const [showProfile, setShowProfile] = useState(false);
    const [deleteId, setDeleteId] = useState();
    const navigate = useNavigate();
    useEffect(() => {
        let token = JSON.parse(localStorage.getItem('token'));
        axios.post('http://localhost:5000/profile', null, {
            headers: {
                'Authorization': `bearer ${token}`
            }
        })
            .then(res => {
                if (res.data.result) {
                    navigate('/profile');
                } else {
                    navigate('/login');
                }
            })
            .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        let userId = JSON.parse(localStorage.getItem('id'));
        axios.get(`http://localhost:5000/getUserById?id=${userId}`)
            .then(res => {

                setFname(res.data.data[0].fname)
                setLname(res.data.data[0].lname)

            }).catch(err => console.log(err))
    })

    const handleUsertable = (id) => {
        setUsertable(true);
        axios.get('http://localhost:5000/getAllUsers')
            .then(res => {
                setUserData(res.data.data)
                console.log("user data", userData);
            }).catch(err => console.log(err))
    }

    const showDeleteUserPopup = (id) => {
        setDeleteId(id);
        setShow(true);
    }

    const handleDeleteUser=()=>{
        axios.delete(`http://localhost:5000/deleteUserById?id=${deleteId}`)
        .then(res => {
            setShow(false);
            if (res.data.result) {
                const updatedUserData = userData.filter((data) => data.id !== deleteId);
                setUserData(updatedUserData);
            }
        }).catch(err => console.log(err))
    }
    const handleClose=()=> setShow(false);
    const showUserProfile=(userId)=>{
        setShowProfile(true);
        axios.get(`http://localhost:5000/getUserById?id=${userId}`)
        .then(res => {
            setProfileData(res.data.data);
        }).catch(err => console.log(err))
    }
    return (
        <div>
            {
                !usertable
                    ?
                    (

                        <div className="container mt-5 profile-container">

                            <div class="row d-flex justify-content-center">

                                <div class="col-md-7">

                                    <div class="card p-3 py-4">

                                        <div class="text-center">

                                            <img src="https://www.freeiconspng.com/uploads/png-file-png-file-png-file-png-file-png-file-27.png" width="100" alt="Profile Icon Png" class="rounded-circle border" />
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
                                                {
                                                    fname === 'jayesh'
                                                        ?
                                                        (
                                                            <>
                                                                <button class="btn btn-outline-primary px-4">Message</button>
                                                                <button class="btn btn-primary px-4 ms-3">Contact</button>
                                                                <button class="btn btn-primary px-4 py-2 ms-3" style={{ "backgroundColor": "rgb(3, 3, 121)" }} onClick={handleUsertable}>Manage users</button>
                                                            </>
                                                        )
                                                        :
                                                        (
                                                            <>
                                                                <button class="btn btn-outline-primary px-4">Message</button>
                                                                <button class="btn btn-primary px-4 ms-3">Contact</button>
                                                            </>
                                                        )
                                                }
                                            </div>
                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    )
                    :
                    (

                        <div className="container mt-5 ">
                            <div className='row'>
                                <div className="col-4"><h2 style={{"cursor":"pointer"}}><FontAwesomeIcon icon={faArrowLeft} onClick={() => setUsertable(false)}/></h2></div>
                                <div className="col"><h2>Manage User Information</h2></div>
                            </div>
                            <div className="user-table mt-3 overflow-auto">
                                <table class="table table-hover table-bordered ">
                                    <thead>
                                        <tr>
                                            <th scope="col">Sr. no</th>
                                            <th scope="col">First name</th>
                                            <th scope="col">Last name</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            userData.map((data, index) => {
                                                return (
                                                    <tr key={index}>
                                                        <th>{index + 1}</th>
                                                        <td>{data.fname}</td>
                                                        <td>{data.lname}</td>
                                                        <td>{data.email}</td>
                                                        <td style={{ "cursor": "pointer" }}><FontAwesomeIcon icon={faTrash} onClick={() => showDeleteUserPopup(data.id)} /> 
                                                                <FontAwesomeIcon icon={faEye} className='ms-3' onClick={()=>showUserProfile(data.id)}/></td>
                                                    </tr>
                                                );
                                            })
                                        }
                                    </tbody>
                                </table>
                                {/* Delete user popup */}
                                <Modal show={show} onHide={handleClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Confirm</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>Are you sure to delete the user</Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" style={{ "padding": "5px 20px 5px", "backgroundColor": "rgb(4, 4, 229)" }} onClick={handleClose}>
                                            Close
                                        </Button>
                                        <Button variant="primary" style={{ "padding": "5px 20px 5px", "backgroundColor": "rgb(4, 4, 229)" }} onClick={handleDeleteUser}>
                                            confirm
                                        </Button>
                                    </Modal.Footer>
                                </Modal>
                                {/* View user profile popup */}
                                <ProfilePopup 
                                profileData={profileData}
                                show={showProfile}
                                onHide={() => setShowProfile(false)}
                                />
                            </div>
                        </div>

                    )
            }
        </div >
    )
}
