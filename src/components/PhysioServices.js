import React from "react";
import "../components/PhysioServices.css";
import PhysioImg from "../images/physio_treatment.avif";
import AcupunctureImg from "../images/acupuncture.avif";
import GymImg from "../images/gym.avif";
import ReadMoreModal from "./ReadMoreModal";

function PhysioServices() {
  return (
    <section className="physio-services-div text-center">
      <div>
        <p className="text-center">
          <b className="howWeHelp">HOW WE HELP</b>
        </p>
        <h2>Our Physiotherapy Services</h2>
      </div>
      <div className=" d-flex flex-column flex-lg-row justify-content-center align-items-center">
        <div className="physio_services d-flex flex-column align-items-center m-2">
          <div>
            <img
              className="img-fluid"
              src={PhysioImg}
              alt="physiotherapist assessing clients shoulder"
            />
          </div>
          <div className="physio_services_modal_text pt-3">
            <h3 className="text-center pb-3">PHYSIOTHERAPY</h3>
          </div>
          <div className="modal-btn-container">
            <ReadMoreModal
              title="PHYSIOTHERAPY"
              content="Treatment is aimed to relieve your pain
            and restore function as quickly as possible. This can
            be through hands on techniques such as joint mobilisation
            and manipulation, dry needling and acupuncture, 
            soft tissue massage and exercise therapy."
            />
          </div>
        </div>
        <div className="physio_services d-flex flex-column align-items-center m-4">
          <div>
            <img
              className="img-fluid"
              src={AcupunctureImg}
              alt="physiotherapist performing acupuncture on patient"
            />
          </div>
          <div className="physio_services_modal_text pt-3">
            <h3 className="text-center pb-3">DRY NEEDLING</h3>
          </div>
          <div className="modal-btn-container">
            <ReadMoreModal
              title="DRY NEEDLING"
              content="At Limitless Physiotherapy we use a range of treatments to help get you pain free and moving easier. This includes dry needling.
          Dry needling is a form of therapy that is used to treat muscle pain which is due to things called trigger points. These trigger points or &#34;muscle knots&#34; can cause pain locally and to the surrounding area and may limit daily functioning. They are taut bands of dysfunctional muscle which have remained contracted.
          This results in reduced blood flow to the muscle and causes a build-up of metabolic by-products which can result in pain to the area. Dry needling involves the insertion of fine, sterilised, single-use needles into the &#34;trigger points&#34; of the muscle.
          The insertion of a needle into a trigger point can create a twitch response in the muscle which causes these taut bands of muscle to relax and return to their normal tone. This can reduce pain and improve functioning.
          Dry needling can help with a range of conditions such as cervicogenic headaches, jaw pain, back pain, shoulder pain, tennis elbow and lower limb pain."
            />
          </div>
        </div>
        <div className="physio_services d-flex flex-column align-items-center m-4">
          <div>
            <img
              className="img-fluid"
              src={GymImg}
              alt="gym rehabilitation setup"
            />
          </div>
          <div className="physio_services_modal_text pt-3">
            <h3 className="text-center pb-3">GYM REHABILITATION</h3>
          </div>
          <div className="modal-btn-container">
            <ReadMoreModal
              title="GYM REHABILITATION"
              content="Often following injury more than a home exercise 
          program is required to return you to full function. In 
          these cases our Physiotherapists may recommend a gym based rehabilitation program. Working 
          in the gym allows for a greater range of exercises under 
          higher loads to be performed and will prepare you for the 
          demands of everyday life. Gym programs are particularly 
          useful if you have to work in an environment which requires 
          heavy manual labour or repetitive tasks. Gym programs are 
          also suitable for those looking to get back to the sporting 
          field and ensure that your injury is rehabilitated to a level
           which will withstand the demands of your chosen sport. Gym 
           programs may also be recommended for those looking to lose 
           weight or for those suffering from diabetes or post 
           cardiac surgery."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default PhysioServices;
