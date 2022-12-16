import "../components/ContactForm.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

function ContactForm() {
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
      <Form className="form_container m-5 rounded-1">
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            className="form_inputs bg-light"
            type="text"
            placeholder="Enter name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            className="form_inputs bg-light"
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPhone">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            className="form_inputs bg-light"
            type="text"
            placeholder="Enter phone number"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formSubject">
          <Form.Label>Subject</Form.Label>
          <Form.Control
            className="form_inputs bg-light"
            type="text"
            placeholder="Enter subject"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control
            className="form_inputs bg-light"
            as="textarea"
            rows={4}
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
