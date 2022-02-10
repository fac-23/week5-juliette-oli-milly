import React from "react";
import logo from "./logo.svg";
import "./App.css";
// import FetchHoroscope from "./FetchHoroscope.jsx";
import Form from "./Form.jsx";
import FetchGif from "./FetchGif.jsx";
import FetchColor from "./FetchColor.jsx";
import FetchMood from "./FetchMood.jsx";
import FetchHoroscope from "./FetchHoroscope";

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
          setFormVisibility={setFormVisibility}
          setName={setName}
          setStarsign={setStarsign}
        />
      )}
      <FetchHoroscope name={name} starsign={starsign} />
      <FetchGif name={name} starsign={starsign} />
      <FetchColor starsign={starsign} />
      <FetchMood starsign={starsign} />
         </div>
    </div>
  );
}

export default App;