import { React, useState } from "react";
import girl1 from "../Images/girl1.PNG";
import girl2 from "../Images/girl2.PNG";

const Girl = ({ randomNumber }) => {
  const [girlName, setGirlName] = useState("");

  let girlNames = [
    "Ha-eun",
    "Ha-rin",
    "Ha-yoon",
    "Ji-a",
    "Ji-an",
    "Ji-woo",
    "Ji-yoo",
    "Seo-ah",
    "Seo-yun",
    "Soo-ah",
    "Bong-Cha",
    "Eun Ae",
    "Ha-Yun",
    "Min Jee",
    "Sang Hee",
    "Hei-Ran",
    "Hyo-Sonn",
    "Hyun-Ok",
    "Mi Kyong",
    "Soo Yun",
    "Suk-Ja",
    "Young Mi",
    "Sun Hee",
    "Sun-Hi",
    "Yun Hee",
    "Hee-Young",
  ];

  return (
    <div>
      <h3 className="girlContainer">{girlNames[randomNumber]}</h3>
      <img src={girl2} alt="" id="girlImage" />
    </div>
  );
};

export default Girl;
