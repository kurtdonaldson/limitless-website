import React from "react";
import ProfilePic from "../images/side_lying.JPG";

function About() {
  return (
    <section>
      <header className="about_page">
        <h2>ABOUT US</h2>
        <h1>
          Limitless <span>Physiotherapy</span>
        </h1>
        <p>
          At Limitless Physiotherapy we are dedicated to providing top quality
          physiotherapy treatment in order to help people reach their functional
          goals.
        </p>
        <button>BOOK ONLINE</button>
      </header>
      <main className="img_caption_div d-flex justify-content-start">
        <div className="profile_pic w-50">
          <img src={ProfilePic} alt="" />
          <figcaption>
            <p>
              <b className="about_name">Kurt Donaldson</b>{" "}
            </p>
            <p>
              <b>Qualifications</b>{" "}
            </p>
            <ul>
              <li>BHSc (Physiotherapy)</li>
              <li>PgCertHSc (Rehabilitation)</li>
              <li>PgCertHSc (Acupuncture)</li>
            </ul>
          </figcaption>
        </div>
        <div className="profile_blurb w-50">
          <div>
            <h2>DIRECTOR OF LIMITLESS PHYSIOTHERAPY</h2>
            <p>
              Kurt completed his Bachelor of Physiotherapy at the University of
              Technology (AUT).
            </p>
            <p>
              He has gone on to complete various post graduate training courses
              and is currently completing a Masters of Musculoskeletal
              Physiotherapy at AUT.
            </p>
            <p>
              Kurt is focused on keeping updated with the latest evidence based
              research in order to provide people with the highest quality
              service.
            </p>
            <p>
              Kurt is passionate about providing quality physiotherapy services
              including carrying out a combination of manual therapy techniques
              and gym based functional rehabilitation.
            </p>
            <p>
              He has acquired a wide range of experience in New Zealand and
              overseas treating various musculoskeletal conditions and injuries.
            </p>
            <p>
              He has also been the team physiotherapist for several sports teams
              including various rugby and ruby league teams.
            </p>
          </div>
        </div>
      </main>
    </section>
  );
}

export default About;
