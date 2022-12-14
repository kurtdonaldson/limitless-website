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
              Experienced clinicians who are up to date with the latest treatment techniques
              and evidence based practice. Personalised gym based rehabilitation
              programs prescribed as required. 
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
              Every body is different and the same treatment will not be suitable
              for every person. We customise every treatment to suit each individual. 
              We aim to not only treat the symptom, but find the cause of the issue. 
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
              We use the latest and best manual therapy techniques to provide symptom relief. We
              will prescribe you with a home exercise program to compliment the treatment
              you have received in order to get results fast. 
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
