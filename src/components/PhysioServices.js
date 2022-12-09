import React from "react";
import "../components/Contact.css";
import PhysioImg from "../images/physio_treatment.avif";
import AcupunctureImg from "../images/acupuncture.avif";
import GymImg from "../images/gym.avif";

function PhysioServices() {
  return (
    <div className="text-center">
      <div>
        <p>HOW WE HELP</p>
        <h2>Our Physiotherapy Services</h2>
      </div>
      <div className="d-flex">
        <div className="physio_treatment">
          <div>
            <img src={PhysioImg} alt="" width="250vw" />
          </div>
          <div>
            <h3>PHYSIOTHERAPY</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis
              voluptates animi fuga officiis commodi, corrupti dicta obcaecati.
              Cum exercitationem pariatur eius aliquid provident quam unde
              necessitatibus nobis. Quaerat, deserunt repudiandae!
            </p>
          </div>
          <div>
            <button>READ MORE</button>
          </div>
        </div>
        <div className="needling_treatment">
          <div>
            <img src={AcupunctureImg} alt="" width="250vw" />
          </div>
          <div>
            <h3>DRY NEEDLING</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis
              voluptates animi fuga officiis commodi, corrupti dicta obcaecati.
              Cum exercitationem pariatur eius aliquid provident quam unde
              necessitatibus nobis. Quaerat, deserunt repudiandae!
            </p>
          </div>
          <div>
            <button>READ MORE</button>
          </div>
        </div>
        <div className="gymRehab_treatment">
          <div>
            <img src={GymImg} alt="" width="250vw" />
          </div>
          <div>
            <h3>GYM REHABILITATION</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis
              voluptates animi fuga officiis commodi, corrupti dicta obcaecati.
              Cum exercitationem pariatur eius aliquid provident quam unde
              necessitatibus nobis. Quaerat, deserunt repudiandae!
            </p>
          </div>
          <div>
            <button>READ MORE</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhysioServices;
