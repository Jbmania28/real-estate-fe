import { useEffect, useState } from 'react'
import { Modal } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import userprofile from '../assets/userprofile.png'
import '../Style/profilePopup.css'
export default function ProfilePopup(props) {
    const [userProfile, setUserProfile] = useState({});

    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <div className="img-container w-100 text-center">
                    <img src={userprofile} alt="" height="100px" width="100px" />
                </div>
            </Modal.Header>
            <Modal.Title id="contained-modal-title-vcenter">
                <div className='text-center'>
                    {props.profileData[0]?.fname} {props.profileData[0]?.lname}
                </div>
            </Modal.Title>

            <Modal.Body>
                <table class="table caption-top table-bordered">
                    
                    <thead>
                        <tr>
                            <th scope="col">Gender</th>
                            <td>{props.profileData[0]?.gender}</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Residence</th>
                            <td>{props.profileData[0]?.residence}</td>
                            
                        </tr>
                        <tr>
                            <th scope="row">Address</th>
                            <td>{props.profileData[0]?.address}</td>
                            
                        </tr>
                        <tr>
                            <th scope="row">Email</th>
                            <td>{props.profileData[0]?.email}</td>
                           
                        </tr>
                    </tbody>
                </table>

            </Modal.Body>
            <div id="profile-footer">
                <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer></div>
        </Modal>

    )
}
