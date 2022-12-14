import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import LumbarStretch from "../images/lumbar_rotation_pic.jpeg";
import Hours from "../components/Hours";
import PhysioServices from "../components/PhysioServices";
import WhyChooseUs from "../components/WhyChooseUs";

function Home() {
  return (
    <div>
      <section className="homePage d-flex justify-content-center align-items-center">
        <div className="d-flex flex-column align-items-start align-items-lg-center ps-3">
          <h1 className="p-3 pb-5 display-1 text-center">
            Limitless Physiotherapy
          </h1>
          <p>
            <MdLocationOn className="icons text-center" /> 80 Delta Ave, New
            Lynn, Auckland 0600
          </p>
          <div className="d-flex flex-column flex-sm-row phoneEmailContainer">
            <p className="pt-3 pe-4">
              <BsFillTelephoneFill className="icons" /> 022 460 8079
            </p>
            <p className="pt-3">
              <MdEmail className="icons" /> info@limitlessphysio.co.nz
            </p>
          </div>
          <div className="align-self-center pt-5">
            <a
              className="book-button"
              type="button"
              href="https://nzappts.gensolve.com/limitless"
              target="_blank"
              rel="noreferrer"
            >
              BOOK ONLINE NOW
            </a>
          </div>
        </div>
      </section>
      <section className="whoWeAre container">
        <div className="mission-vision-row row ps-3 pe-3">
          <div className="missionDiv col-lg">
            <h2 className="pb-">OUR MISSION AND VISION</h2>
            <p>
              At Limitless Physiotherapy we are dedicated to providing top
              quality physiotherapy treatment in order to help people reach
              their functional goals.
            </p>
            <p>
              We have longer session times which allows us to complete a
              thorough assessment and follow up with the appropriate means of
              physiotherapy treatment.
            </p>
            <p>
              This may include manual therapy, dry needling, gym based
              rehabilitation and various other treatment modalities.
            </p>
          </div>
          <div className="lumbarImgDiv col-lg">
            <img className="img-fluid" src={LumbarStretch} alt="" />
          </div>
        </div>
      </section>
      <Hours />
      <PhysioServices />
      <WhyChooseUs />
    </div>
  );
}

export default Home;
