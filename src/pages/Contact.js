import React from "react";
import ContactForm from "../components/ContactForm";
import ContactFooter from "../components/ContactFooter";
import { Helmet } from "react-helmet";
//Import Helmet package to change title when navigating to different page.
//Used for title tag optimisation

function ContactPage() {
  return (
    <section>
      <Helmet>
        <title>
          Contact Us | Limitless Physiotherapy | Physiotherapist New Lynn
        </title>
      </Helmet>
      <header className="contact_page_header">
        <h2>
          GET <span>IN</span> TOUCH
        </h2>
        <h1>
          Contact <span>Us</span>
        </h1>
        <p className="pe-3">
          Located in the Invictus gym, 80 Delta avenue, New Lynn, Auckland.
        </p>
        <div className="d-flex justify-content-center">
          <a
            className="book-button"
            type="button"
            href="https://nzappts.gensolve.com/limitless"
            target="_blank"
            rel="noreferrer"
          >
            BOOK ONLINE
          </a>
        </div>
      </header>
      <main>
        <ContactForm />
      </main>
      <footer>
        <ContactFooter />
      </footer>
    </section>
  );
}

export default ContactPage;
