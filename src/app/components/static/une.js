import React from "react";
import Rebond from "../dynamic/rebond";

const Une = () => {
    const text0="Quand la science s’emmêle : une erreur de conversion et la sonde s’écrase sur Mars"
  const text1 = "Curabitur blandit tempus porttitor. Cras justo odio";
  const text2 =
    "Morbi leo risus, porta ac consectetur ac, vestibulum at eros ipsum dolor sit amet, consectetur adipiscing elit";
  return (
    <div style={{ marginTop: "20%" }}>
      <Rebond text={text0}/>
      <div
        style={{
          height: "582px",
          backgroundColor: "#D693AB",
          borderRadius: "9",
        }}
      ></div>
      <p>
        Les derniers calculs effectués par les modèles météorologiques
        anticipent des températures plus élevées encore qu’attendues.
      </p>
      <div>
        <ul
          style={{ display: "flex", listStyleType: "square", color: "#1EA0E6" }}
        >
          <li className="en-continu-sidebar-v2__item" style={{width: "100%"}}>
            <Rebond text={text1} />
          </li>

          <li className="en-continu-sidebar-v2__item">
            <Rebond text={text2} />
          </li>
        </ul>
      </div>

      <hr></hr>
    </div>
  );
};

export default Une;
