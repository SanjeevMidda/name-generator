import { React, useState } from "react";
import boy1 from "../Images/boy1.PNG";
import boy2 from "../Images/boy2.PNG";
import boy3 from "../Images/boy3.PNG";

const Boy = ({ randomNumber }) => {
  const [boyName, setBoyName] = useState("");

  let boyNames = [
    "Beom seok",
    "Chung-Ho",
    "Do Yoon",
    "Kwang-Sun",
    "Myung-Dae",
    "Seong-Jin",
    "Yeong-Hwan",
    "Do-yun",
    "Eun-woo",
    "Ha-joon",
    "Ji-ho",
    "Ju-won",
    "Min-jun",
    "Seo-jun",
    "Si-woo",
    "Ye-jun",
    "Yu-jun",
    "Baek Hyeon",
    "Chung Ae",
    "Dae-Ho",
    "Du-Ho",
    "Yeong",
    "Min Joon",
    "Seong-Ho",
    "Seong-Min",
    "Su-Bin",
  ];

  return (
    <div className="boyContainer">
      <h3>{boyNames[randomNumber]}</h3>
      <img src={boy2} alt="" />
    </div>
  );
};

export default Boy;
