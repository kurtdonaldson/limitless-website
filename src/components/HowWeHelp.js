import React from "react";
import "../components/HowWeHelp.css";

function HowWeHelp() {
  return (
    <section className="how_we_help d-flex justify-content-center align-items-center">
      <div className="how_we_help_card d-flex flex-column">
        <h2 className="pb-4">How we can help you</h2>
        <h3 className="pb-3">
          Our team is qualified and experienced in treating:
        </h3>
        <div className="d-flex pb-4">
          <ul>
            <li>Low back pain</li>
            <li>Neck pain</li>
            <li>Headaches and migraines</li>
            <li>Running injuries</li>
            <li>Patellofemoral joint injury/runner's knee</li>
            <li>Running injuries</li>
            <li>Achilles tendinopathy</li>
            <li>Hamstring tendinopathy</li>
            <li>Gluteal tendinopathy</li>
          </ul>
          <ul>
            <li>Plantar fascitis</li>
            <li>Shoulder pain</li>
            <li>Rotator cuff injury</li>
            <li>Tennis/golfer's elbow</li>
            <li>Iliotibial band syndrome</li>
            <li>ACL injuries</li>
            <li>Shin splints</li>
            <li>Chronic pain</li>
            <li>Hip impingement/labral injuries</li>
          </ul>
        </div>
        <button className="align-self-center">
          BOOK A PHYSIOTHERAPY APPOINTMENT
        </button>
      </div>
    </section>
  );
}

export default HowWeHelp;
