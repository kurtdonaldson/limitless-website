import React from "react";
import "../components/WhyChooseUs.css";
import { BsFillBarChartFill } from "react-icons/bs";
import { BsFillPeopleFill } from "react-icons/bs";
import { BsPencilSquare } from "react-icons/bs";

function WhyChooseUs() {
  return (
    <section className="why-us-div text-center">
      <div>
        <h2>Why Choose Us?</h2>
        <p className="why-us-p">
          We like to think there are lots of reasons, but here are some of our
          points of difference.
        </p>
      </div>
      <div className=" d-flex flex-column flex-lg-row justify-content-center align-items-center align-items-lg-start">
        <div className="why-us-container d-flex flex-column align-items-center p-4">
          <div>
            <BsFillPeopleFill className="why_choose_icon" />
          </div>
          <div className="pt-3">
            <h3 className="text-center pb-3">
              Experts in Both Physiotherapy and Gym-based rehabilitation
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis
              voluptates animi fuga officiis commodi, corrupti dicta obcaecati.
              Cum exercitationem pariatur eius aliquid provident quam unde
              necessitatibus nobis. Quaerat, deserunt repudiandae!
            </p>
          </div>
        </div>
        <div className="why-us-container d-flex flex-column align-items-center p-4">
          <div>
            <BsPencilSquare className="why_choose_icon" />
          </div>
          <div className="pt-3">
            <h3 className="text-center pb-3">Tailored Treatment Plans</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis
              voluptates animi fuga officiis commodi, corrupti dicta obcaecati.
              Cum exercitationem pariatur eius aliquid provident quam unde
              necessitatibus nobis. Quaerat, deserunt repudiandae!
            </p>
          </div>
        </div>
        <div className="why-us-container d-flex flex-column align-items-center p-4">
          <div>
            <BsFillBarChartFill className="why_choose_icon" />
          </div>
          <div className="pt-3">
            <h3 className="text-center pb-3">Fast Results</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis
              voluptates animi fuga officiis commodi, corrupti dicta obcaecati.
              Cum exercitationem pariatur eius aliquid provident quam unde
              necessitatibus nobis. Quaerat, deserunt repudiandae!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
