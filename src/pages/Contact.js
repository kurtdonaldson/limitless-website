import React from "react";

function ContactPage() {
  return (
    <section>
      <header className="contact_page_header">
        <h2>
          CONTACT <span>US</span>
        </h2>
        <h1>
          Limitless <span>Physiotherapy</span>
        </h1>
        <p>Located in the Invictus gym, 80 Delta avenue, New Lynn, Auckland.</p>
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
      <main></main>
    </section>
  );
}

export default ContactPage;
