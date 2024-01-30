import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import LumbarStretch from "../images/arm_raise_pic.avif";
import Hours from "../components/Hours";
import PhysioServices from "../components/PhysioServices";
import WhyChooseUs from "../components/WhyChooseUs";
import ContactFooter from "../components/ContactFooter";
import { Helmet } from "react-helmet";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Home() {
  return (
    <div>
      <section className="homePage d-flex justify-content-center align-items-center">
        <Helmet>
          <title>
            Limitless Physiotherapy | West Auckland Physiotherapy Services
          </title>
          <meta
            name="description"
            content="Limitless Physiotherapy is focused on providing high quality physiotherapy 
      treatment in order to help people recover faster and move easier."
          />
        </Helmet>
        <div className="d-flex flex-column align-items-start align-items-sm-center">
          <h1 className="p-3 pb-5 display-1 text-center">
            Limitless Physiotherapy
          </h1>
          <p className="ps-3">
            <MdLocationOn className="icons text-center" /> 80 Delta Ave, New
            Lynn, Auckland
          </p>
          <div className="d-flex flex-column flex-sm-row phoneEmailContainer ps-3">
            <a href="tel:0224608079">
              <p className="pt-3 pe-4">
                <BsFillTelephoneFill className="icons" /> 022 460 8079
              </p>
            </a>
            <a href="mailto:kurtlimitlessphysio@gmail.com">
              <p className="pt-3">
                <MdEmail className="icons" /> kurtlimitlessphysio@gmail.com
              </p>
            </a>
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
      <section className="whoWeAre d-flex justify-content-center">
        <div className="mission-vision-row d-flex flex-column flex-lg-row ps-2 pe-2">
          <div className="missionDiv d-flex flex-column justify-content-center">
            <h2>OUR MISSION AND VISION</h2>
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
          <div className="lumbarImgDiv d-flex justify-content-center">
            <div className="animated fadeInRight">
              <LazyLoadImage
                className="lumbarImg physioImageFadeRight"
                src={LumbarStretch}
                alt="physiotherapy treating client with lower back pain"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
      <Hours />
      <PhysioServices />
      <WhyChooseUs />
      <ContactFooter />
    </div>
  );
}

export default Home;
