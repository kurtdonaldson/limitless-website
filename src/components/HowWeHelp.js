import React from "react";
import "../components/HowWeHelp.css";

function HowWeHelp() {
  return (
    <section className="how_we_help d-flex justify-content-center align-items-center mt-5 pt-4 pb-4">
      <div className="how_we_help_card d-flex flex-column pb-5">
        <h2 className=" pt-4 pb-4 ps-1 pe-1 text-center">
          HOW WE CAN HELP YOU
        </h2>
        <h3 className="pb-3 text-center">
          Our team is qualified and experienced in treating:
        </h3>
        <div className="d-flex pb-4 ps-3 pe-3 justify-content-center">
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
        <a
          className="book-button align-self-center ps-2 pe-2"
          type="button"
          href="https://nzappts.gensolve.com/limitless"
          target="_blank"
          rel="noreferrer"
        >
          BOOK ONLINE NOW
        </a>
      </div>
    </section>
  );
}

export default HowWeHelp;
