import React from "react";
import "../components/Prices.css";

function Prices() {
  return (
    <section className="prices_section d-flex flex-column justify-content-center align-items-center">
      <div className="prices_card">
        <h2>LIMITLESS PHYSIO CLINIC FEES</h2>
        <div className="mb-4">
          <h3>ACC Consultation Charges</h3>
          <div className="d-flex justify-content-between">
            <div>
              <p>New Injury /Initial Consultation 45-60 min</p>
            </div>
            <div>
              <p>$25</p>{" "}
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <div>
              <p>Follow Up Consultation 30-45 min</p>{" "}
            </div>
            <div>
              <p>$25</p>{" "}
            </div>
          </div>
        </div>

        <div className="mb-4">
          <h3>ACC Consultation Charges Invictus Gym Members</h3>
          <div className="d-flex justify-content-between">
            <div>
              <p>New Injury /Initial Consultation 45-60 min</p>{" "}
            </div>
            <div>
              <p>$20</p>{" "}
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <div>
              <p>Follow Up Consultation 30-45 min</p>{" "}
            </div>
            <div>
              <p>$20</p>{" "}
            </div>
          </div>
        </div>

        <div className="mb-4">
          <h3>Private Consultation Charges</h3>
          <div className="d-flex justify-content-between">
            <div>
              <p>60 min consultation</p>{" "}
            </div>
            <div>
              <p>$80</p>{" "}
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <div>
              <p>45 min consultation</p>{" "}
            </div>
            <div>
              <p>$65</p>{" "}
            </div>
          </div>
        </div>

        <div className="mb-4">
          <h3>Bodyfat Caliper Test</h3>
          <div>
            <div>
              <p>$15</p>{" "}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Prices;
