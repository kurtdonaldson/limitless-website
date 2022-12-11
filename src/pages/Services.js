import React from "react";
import ScapularPic from "../images/scapular_pic.JPG";
import HowWeHelp from "../components/HowWeHelp";
import Prices from "../components/Prices";

function Services() {
  return (
    <section>
      <header className="services_page">
        <h2>SERVICES AND PRICES</h2>
        <h1>
          Physiotherapy <span>Services</span>
        </h1>
        <p>
          At Limitless Physiotherapy, we offer a wide range of physiotherapy
          services to help with back and neck pain, sports injuries,
          post-operative rehabilitation, nerve conditions, ligaments, joints and
          muscular injuries.
        </p>
        <a
          className="book-button"
          type="button"
          href="https://nzappts.gensolve.com/limitless"
          target="_blank"
          rel="noreferrer"
        >
          BOOK ONLINE
        </a>
      </header>
      <main>
        <section className="treatments_offered d-flex">
          <div className="w-50">
            <img src={ScapularPic} alt="" />
          </div>
          <div className="w-50">
            <h2>PHYSIOTHERAPY SERVICES</h2>
            <div className="d-flex pt-4">
              <ul>
                <li>Joint mobilisation</li>
                <li>Acupuncture</li>
                <li>Cupping</li>
                <li>Soft tissue massage</li>
                <li>Joint manipulation</li>
                <li>Postural assessment</li>
              </ul>
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
        </section>
        <HowWeHelp />
        <Prices />
      </main>
    </section>
  );
}

export default Services;
