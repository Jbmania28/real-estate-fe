import React, { useState } from 'react'
import '../Style/contact.css'
import validation from '../Validations/contactValidation'
import axios from 'axios'
import { Modal } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
export default function Contactus() {
  const [show, setShow] = useState()
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [contact, setContact] = useState();
  const [message, setMessage] = useState();
  const [user, setUser] = useState({
    name: '',
    email: '',
    contact: '',
    message: ''
  })
  const [err, setErr] = useState({});
  const handleInput = (event) => {
    setUser(prev => ({ ...prev, [event.target.name]: [event.target.value] }))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(user);
    setErr(validation(user));
    console.log("errors", err)
    if (err.name === "" && err.email === "" && err.contact === "" && err.message === "") {
      axios.post('http://localhost:5000/contactus', user)
        .then(res => {
         setShow(true);
          setName('');
          setEmail('');
          setContact('');
          setMessage('');
        })
        .catch(res => console.log(err))
    }
  }

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <div>
      <div class="container contact-form ">
        <div class="contact-image">
          <img src="https://image.ibb.co/kUagtU/rocket_contact.png" alt="rocket_contact" />
        </div>
        <form method="post" onSubmit={handleSubmit}>
          <h3>Drop Us a Message</h3>
          <div class="row">
            <div class="col-md-6">
              <div class="form-group ">
                <input type="text" name="name" class="form-control" placeholder="Your Name *" value={name} onChange={handleInput} />
                {err.name && <span className='text-danger'>{err.name}</span>}
              </div>
              <div class="form-group mt-3">
                <input type="email" name="email" class="form-control" placeholder="Your Email *" value={email} onChange={handleInput} />
                {err.email && <span className='text-danger'>{err.email}</span>}
              </div>
              <div class="form-group mt-3">
                <input type="text" name="contact" class="form-control" placeholder="Your Phone Number *" value={contact} onChange={handleInput} />
                {err.contact && <span className='text-danger'>{err.contact}</span>}
              </div>
              <div class="form-group mt-3">
                <input type="submit" name="btnSubmit" class="btnContact" />

                {/* contact us popup */}
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Thank you </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>We will reach you soon!!</Modal.Body>
                  <Modal.Footer>
                    <Button variant="btn btn-primary" style={{"padding":"5px 20px 5px","backgroundColor":"rgb(4, 4, 229)"}} onClick={handleClose}>
                      Ok
                    </Button>
                  </Modal.Footer>
                </Modal>
              </div>
            </div>
            <div class="col-md-6 mt-md-0 mt-3">
              <div class="form-group">
                <textarea name="message" class="form-control" placeholder="Your Message *" value={message} style={{ "width": "100%", "height": "150px" }} onChange={handleInput}></textarea>
                {err.message && <span className='text-danger'>{err.message}</span>}
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
