import React from "react";
import "../components/Prices.css";

function Prices() {
  return (
    <section className="prices_section d-flex flex-column justify-content-center align-items-center">
      <h2>LIMITLESS PHYSIO CLINIC FEES</h2>
      <div className="prices_card">
        <h3>ACC Consultation Charges</h3>
        <ul>
          <li>New Injury /Initial Consultation 45-60 min $25</li>
          <li>Follow Up Consultation 30-45 min $20</li>
        </ul>

        <br />
        <h3>ACC Consultation Charges Invictus Gym Members</h3>
        <ul>
          <li>New Injury /Initial Consultation 45-60 min $20</li>
          <li>Follow Up Consultation 30-45 min $15</li>
        </ul>

        <br />
        <h3>Private Consultation Charges</h3>
        <ul>
          <li>60 min $80</li>
          <li>45 min $65</li>
        </ul>

        <h3>Bodyfat Caliper Test</h3>
        <ul>
          <li>$15</li>
        </ul>
      </div>
    </section>
  );
}

export default Prices;
