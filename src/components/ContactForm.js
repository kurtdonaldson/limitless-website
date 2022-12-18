import "../components/ContactForm.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';
import { useState } from "react";

function ContactForm() {
  const form = useRef();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_j9jxafj', 'template_jfqavw9', form.current, 'CrQ21hl2Llen8ln3l')
      .then((result) => {
          setName("");
          setEmail("");
          setPhone("");
          setSubject("");
          setMessage("");
          console.log('SUCCESS!', result.status, result.text);
      }, (error) => {
          console.log('FAILED...', error);
      });
  };

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
  //     .then((result) => {
  //         console.log(result.text);
  //     }, (error) => {
  //         console.log(error.text);
  //     });
  // };

  // const handleChange = (e) => {
  //   setToSend({ ...toSend, [e.target.name]: e.target.value });
  // };

  return (
    <section className="d-flex flex-column flex-lg-row">
      <div className="hereToHelp p-4 m-4">
        <h3>PUTTING YOU FIRST</h3>
        <h2>Contact our team</h2>
        <p>
          If you have any questions or enquiries please feel free to contact us
          on the details provided below or alternatively you can complete our
          online enquiry form and we will get back to you as soon as possible.
        </p>
        <div className="d-flex">
          <BsFillTelephoneFill className="contact_icons mt-1 me-2" />
          <p>022 460 8079</p>
        </div>
        <div className="d-flex">
          <MdEmail className="contact_icons mt-1 me-2" />
          <p>info@limitlessphysio.co.nz</p>
        </div>
        <div className="mt-2">
          <BsFacebook className="contact_icons display-6 me-5" />
          <BsInstagram className="contact_icons display-6" />
        </div>
      </div>
      <Form ref={form} className="form_container m-5 rounded-1" onSubmit={sendEmail}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            className="form_inputs bg-light"
            type="text"
            placeholder="Enter name"
            name="name"
            onChange={event => setName(event.target.value)}
            value={name}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            className="form_inputs bg-light"
            type="email"
            placeholder="Enter email"
            name="email"
            onChange={event => setEmail(event.target.value)}
            value={email}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPhone">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            className="form_inputs bg-light"
            type="text"
            placeholder="Enter phone number"
            name="phone"
            onChange={event => setPhone(event.target.value)}
            value={phone}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formSubject">
          <Form.Label>Subject</Form.Label>
          <Form.Control
            className="form_inputs bg-light"
            type="text"
            placeholder="Enter subject"
            name="subject"
            onChange={event => setSubject(event.target.value)}
            value={subject}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control
            className="form_inputs bg-light"
            as="textarea"
            rows={4}
            name="message"
            onChange={event => setMessage(event.target.value)}
            value={message}
            required
          />
        </Form.Group>
        <Button
          className="form_submit_btn rounded-0 border-0 w-100"
          variant="primary"
          type="submit"
        >
          SUBMIT FORM
        </Button>
      </Form>
    </section>
  );
}

export default ContactForm;
