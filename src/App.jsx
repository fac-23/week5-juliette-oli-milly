import React from "react";
import logo from "./ZodIFAC.png";
import "./App.css";
// import FetchHoroscope from "./FetchHoroscope.jsx";
import Form from "./Form.jsx";
import FetchGif from "./FetchGif.jsx";
import FetchColor from "./FetchColor.jsx";
import FetchMood from "./FetchMood.jsx";
import FetchHoroscope from "./FetchHoroscope";
import ColorText from "./ColorText.jsx";
import PickSign from "./datepicker";

//IMAGES
import Aquarius from "./imgs/Aquarius.png";
import Aries from "./imgs/aries.png";
import Cancer from "./imgs/cancer.png";
import Capricorn from "./imgs/capricorn.png";
import Gemini from "./imgs/gemini.png";
import Leo from "./imgs/leo.png";
import Libra from "./imgs/libra.png";
import Pisces from "./imgs/Pisces.png";
import Saggitarius from "./imgs/Sagittarius.png";
import Scorpio from "./imgs/scorpio.png";
import Taurus from "./imgs/tauras.png";
import Virgo from "./imgs/virgo.png";
import pickSign from "./datepicker";


// App is top level
// Form component that will take in user input and pass in data
// Pass down props into a FetchHoroscope component
// The FetchHoroscope component has two jobs
// Take in props, name and starsign
// Fetch data from Horoscope API and renders this on the page to the user

function App() {
  const [formVisible, setFormVisibility] = React.useState(true);
  const [name, setName] = React.useState("");
  const [starsign, setStarsign] = React.useState("");
  const [populateStarField, setStarField] = React.useState("");


  const [visibleStar, setVisibleStar] = React.useState(false);
  const [visibleStar1, setVisibleStar1] = React.useState(false);
  const [visibleStar2, setVisibleStar2] = React.useState(false);
  const [visibleStar3, setVisibleStar3] = React.useState(false);
  const [visibleStar4, setVisibleStar4] = React.useState(false);
  const [visibleStar5, setVisibleStar5] = React.useState(false);
  const [visibleStar6, setVisibleStar6] = React.useState(false);
  const [visibleStar7, setVisibleStar7] = React.useState(false);
  const [visibleStar8, setVisibleStar8] = React.useState(false);

  return (
    <div className="grid-container">
      <div className="stars"> Here is something</div>

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>ZodiFac</h1>
        </header>
        {formVisible && (
          <Form
            populateStarField={populateStarField}
            setFormVisibility={setFormVisibility}
            setName={setName}
            setStarsign={setStarsign}
          />
        )}

      </div>

      <div
        className="stars"
        onMouseEnter={() => setVisibleStar7(true)}
        onMouseLeave={() => setVisibleStar7(false)}
      >
        {visibleStar7 && <img className="image" src={Pisces} />}
      </div>
      <div
        className="side"
        onMouseEnter={() => setVisibleStar8(true)}
        onMouseLeave={() => setVisibleStar8(false)}
      >
        {visibleStar8 && (
          <div>
            <img className="image" src={Saggitarius} />
            <img className="image" src={Virgo} />
          </div>
        )}
      </div>

      <div
        className="blank"
        className="blank"
        onMouseEnter={() => setVisibleStar2(true)}
        onMouseLeave={() => setVisibleStar2(false)}
      ></div>
      <div
        className="blank"
        onMouseEnter={() => setVisibleStar6(true)}
        onMouseLeave={() => setVisibleStar6(false)}
      ></div>
      <div
        className="middle"
        onMouseEnter={() => setVisibleStar3(true)}
        onMouseLeave={() => setVisibleStar3(false)}
      >
        {formVisible && <PickSign setStarField={setStarField}></PickSign>}
        {!formVisible && (
          <div>
            <FetchHoroscope name={name} starsign={starsign} />
            <FetchGif
              name={name}
              starsign={starsign}
              formVisible={formVisible}
            />
            <FetchColor starsign={starsign} />
            <FetchMood starsign={starsign} />
          </div>
        )}
      </div>

      <PickSign setStarField={setStarField}></PickSign>
      <div className="blank"></div>
      <div className="blank"></div>

    </div>
  );
}

export default App;
