import React from "react";
import "../components/PhysioServices.css";
import PhysioImg from "../images/physio_treatment.avif";
import AcupunctureImg from "../images/acupuncture.avif";
import GymImg from "../images/gym.avif";

function PhysioServices() {
  return (
    <div className="physio-services-div text-center">
      <div>
        <p>
          <b className="howWeHelp">HOW WE HELP</b>
        </p>
        <h2>Our Physiotherapy Services</h2>
      </div>
      <div className=" d-flex justify-content-around">
        <div className="physio_services d-flex flex-column align-items-center">
          <div>
            <img src={PhysioImg} alt="" />
          </div>
          <div className="pt-3">
            <h3 className="text-center pb-3">PHYSIOTHERAPY</h3>
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
        <div className="physio_services d-flex flex-column align-items-center">
          <div>
            <img src={AcupunctureImg} alt="" />
          </div>
          <div className="pt-3">
            <h3 className="text-center pb-3">DRY NEEDLING</h3>
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
        <div className="physio_services d-flex flex-column align-items-center">
          <div>
            <img src={GymImg} alt="" />
          </div>
          <div className="pt-3">
            <h3 className="text-center pb-3">GYM REHABILITATION</h3>
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
