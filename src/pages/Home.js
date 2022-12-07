import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { HiLocationMarker } from "react-icons/hi";
import { MdLocationOn } from "react-icons/md";

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
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi
        perferendis rem repellendus veniam recusandae. Totam minus ipsam
        quaerat, deserunt officiis ratione excepturi doloribus pariatur, et
        laboriosam nobis ipsa molestiae fuga!
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi
        perferendis rem repellendus veniam recusandae. Totam minus ipsam
        quaerat, deserunt officiis ratione excepturi doloribus pariatur, et
        laboriosam nobis ipsa molestiae fuga!
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi
        perferendis rem repellendus veniam recusandae. Totam minus ipsam
        quaerat, deserunt officiis ratione excepturi doloribus pariatur, et
        laboriosam nobis ipsa molestiae fuga!
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi
        perferendis rem repellendus veniam recusandae. Totam minus ipsam
        quaerat, deserunt officiis ratione excepturi doloribus pariatur, et
        laboriosam nobis ipsa molestiae fuga!
      </p>
    </div>
  );
}

export default Home;
