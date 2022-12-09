import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import LumbarStretch from "../images/lumbar_rotation_pic.jpeg";
import Hours from "../components/Hours";
import PhysioServices from "../components/PhysioServices";

function Home() {
  return (
    <div>
      <div className="homePage d-flex justify-content-center align-items-center">
        <div className="d-flex flex-column align-items-center">
          <h1 className="p-3">Limitless Physiotherapy</h1>
          <p>
            <MdLocationOn className="icons" /> 80 Delta Ave, New Lynn, Auckland
            0600
          </p>
          <div className="d-flex phoneEmailContainer">
            <p className="p-3">
              <BsFillTelephoneFill className="icons" /> 022 460 8079
            </p>
            <p className="p-3">
              <MdEmail className="icons" /> info@limitlessphysio.co.nz
            </p>
          </div>
        </div>
      </div>
      <section className="whoWeAre d-flex flex-wrap justify-space-between">
        <div className="missionDiv w-50 d-flex flex-column justify-content-center">
          <h2 className="pb-3">Our Mission and Vision</h2>
          <p>
            At Limitless Physiotherapy we are dedicated to providing top quality
            physiotherapy treatment in order to help people reach their
            functional goals.
          </p>
          <p>
            We have longer session times which allows us to complete a thorough
            assessment and follow up with the appropriate means of physiotherapy
            treatment.
          </p>
          <p>
            Treatment may include manual therapy, dry needling, gym based
            rehabilitation and various other treatment modalities. Please see
            services tab for more details.
          </p>
        </div>
        <div className="lumbarImgDiv w-50 d-flex flex-column justify-content-center align-items-center">
          <img src={LumbarStretch} alt="" width="100%%" />
        </div>
      </section>
      <Hours />
      <PhysioServices />
    </div>
  );
}

export default Home;
