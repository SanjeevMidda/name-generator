import "./index.css";
import nameImage from "./Images/name.PNG";
import { useState } from "react";
import Girl from "./components/Girl";
import Boy from "./components/Boy";

function App() {
  const [showGender, setShowGender] = useState(false);
  const [genderSelected, setGenderSelected] = useState("");
  const [randomNumber, setRandomNumber] = useState(0);

  console.log(showGender);

  Math.floor(Math.random() * 26);

  return (
    <div className="App">
      <h1>
        KOREAN <br />
        BABY <br />
        NAME <br />
        GENERATOR
      </h1>

      <div className="content">
        {!showGender && (
          <>
            <h2
              id="girl"
              onClick={() => {
                setShowGender(true);
                setGenderSelected("girl");
              }}
            >
              🙋🏻‍♀️ GIRL
            </h2>
            <div className="line"></div>
            <h2
              id="boy"
              onClick={() => {
                setShowGender(true);
                setGenderSelected("boy");
              }}
            >
              🙋🏻‍♂️ BOY
            </h2>
          </>
        )}

        {genderSelected === "girl" && <Girl randomNumber={randomNumber} />}

        {genderSelected === "boy" && <Boy randomNumber={randomNumber} />}
      </div>

      {showGender && (
        <div className="generateNewName">
          <img
            src={nameImage}
            alt="newName"
            onClick={() => setRandomNumber(Math.floor(Math.random() * 26))}
          />
        </div>
      )}

      {showGender && (
        <div className="selectGender">
          <h2 id="girl" onClick={() => setGenderSelected("girl")}>
            🙋🏻‍♀️ GIRL
          </h2>
          <h2 id="boy" onClick={() => setGenderSelected("boy")}>
            🙋🏻‍♂️ BOY
          </h2>
        </div>
      )}
    </div>
  );
}

export default App;
