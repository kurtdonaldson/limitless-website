import React from "react";
import ScapularPic from "../images/scapular_pic.JPG";
import HowWeHelp from "../components/HowWeHelp";
import Prices from "../components/Prices";
import ContactFooter from "../components/ContactFooter";

function Services() {
  return (
    <section>
      <header className="services_page">
        <h2>SERVICES AND PRICES</h2>
        <h1>
          Physiotherapy <span>Services</span>
        </h1>
        <p className="w-75">
          At Limitless Physiotherapy, we offer a wide range of physiotherapy
          services to help with back and neck pain, sports injuries,
          post-operative rehabilitation, nerve conditions, ligaments, joints and
          muscular injuries.
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
        <section className="treatments_offered d-flex flex-column flex-md-row align-items-center pt-5 justify-content-md-center align-items-md-start">
          <div className="services_pic">
            <img src={ScapularPic} alt="" />
          </div>
          <div className="physio_services d-flex flex-column">
            <h2 className="text-center">PHYSIOTHERAPY SERVICES</h2>
            <div className="d-flex">
              <div>
                <ul>
                  <li>Joint mobilisation</li>
                  <li>Acupuncture</li>
                  <li>Cupping</li>
                  <li>Soft tissue massage</li>
                  <li>Joint manipulation</li>
                  <li>Postural assessment</li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>Post-operative rehabilitation</li>
                  <li>Gym-based rehabilitation</li>
                  <li>Chronic pain management</li>
                  <li>Exercise prescription</li>
                  <li>Taping</li>
                  <li>TEN’s (Transcutaneous electrical nerve stimulation)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <HowWeHelp />
        <Prices />
      </main>
      <footer>
        <ContactFooter />
      </footer>
    </section>
  );
}

export default Services;
