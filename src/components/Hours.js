import React from "react";
import "../components/Hours.css";
import Map from "./Map.jsx";

const location = {
  address: "80 Delta Ave, New Lynn, Auckland, New Zealand.",
  lat: -36.901922882593695,
  lng: 174.68603692861316,
};

function Hours() {
  return (
    <section className="hours_section d-flex justify-content-center align-items-center ps-5 pe-5">
      <div className="physio_hours w-50">
        <h2 className="pb-4">PHYSIOTHERAPIST NEW LYNN CLINIC</h2>
        <p className="pb-3">
          Limitless Physiotherapy is your local provider of Physiotherapy
          services. We offer a wide range of Physio treatments to the
          communities surrounding Avondale, Blockhouse Bay, Glen Eden and
          Kelston.
        </p>
        <hr />
        <ul className="pt-3 ps-0">
          <li className="d-flex justify-content-between">
            <span>Monday</span>
            <span className="dottedBorder"></span>
            <span>10.00am - 6.00pm</span>
          </li>
          <li className="d-flex justify-content-between">
            <span>Tuesday</span>
            <span className="dottedBorder"></span>
            <span>7.00am - 3.00pm</span>
          </li>
          <li className="d-flex justify-content-between">
            <span>Wednesday</span>
            <span className="dottedBorder"></span>
            <span>7.00am - 3.00pm</span>
          </li>
          <li className="d-flex justify-content-between">
            <span>Thursday</span>
            <span className="dottedBorder"></span>
            <span>8.00am - 4.00pm</span>
          </li>
          <li className="d-flex justify-content-between">
            <span>Friday</span>
            <span className="dottedBorder"></span>
            <span>7.00am - 2.00pm</span>
          </li>
        </ul>
      </div>
      <div className="w-50">
        <Map location={location} zoomLevel={17} />
      </div>
    </section>
  );
}

export default Hours;
