import React, { useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Contact = () => {

  const notify = () => toast("Message sent!");
  const formRef = useRef();

    const formInitialDetails = {
        user_name: '',
        user_email: '',
        message: ''
    }
    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonTextEng, setButtonTextEng] = useState("Send");
    const [status, setStatus] = useState({});
    const { REACT_APP_SERVICE_ID, REACT_APP_TEMPLATE_ID, REACT_APP_PUBLIC_KEY } = process.env

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("soy formref", formRef)
        if (formDetails.message !== "" && formDetails.user_email !== "") {
        setButtonTextEng('Sending...');
        emailjs.sendForm(
          REACT_APP_SERVICE_ID, 
          REACT_APP_TEMPLATE_ID, 
          formRef.current , 
          REACT_APP_PUBLIC_KEY
          )
          .then((result) => {
            console.log(result.text);
            setFormDetails(formInitialDetails);
            setButtonTextEng("Sent");
            notify()
          })
          .catch((error) => {
            console.log(error.text);
          });
        }
      };


  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Get in touch!</h2>
                <form ref={formRef} onSubmit={handleSubmit}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input 
                        type="text" 
                        value={formDetails.user_name}
                        name="user_name"
                        placeholder="Name" 
                        onChange={(e) => onFormUpdate('user_name', e.target.value)} 
                        />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input 
                      type="email"
                      name="user_email"
                      value={formDetails.user_email} 
                      placeholder="Email Address" 
                      onChange={(e) => onFormUpdate('user_email', e.target.value)} 
                      />
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea 
                      rows="6" 
                      value={formDetails.message}
                      name="message"
                      placeholder="Message" 
                      onChange={(e) => onFormUpdate('message', e.target.value)}>
                      </textarea>
                      <button type="submit"><span>{buttonTextEng}</span></button>
                    </Col>
                    {
                      status.message &&
                      <Col>
                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                      </Col>
                    }
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
            <ToastContainer />
          </Col>
        </Row>
      </Container>
    </section>
  )
}