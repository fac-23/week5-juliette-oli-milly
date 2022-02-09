import React from "react";
import logo from "./logo.svg";
import "./App.css";
// import FetchHoroscope from "./FetchHoroscope.jsx";
import Form from "./Form.jsx";

// App is top level
// Form component that will take in user input and pass in data
// Pass down props into a FetchHoroscope component
// The FetchHoroscope component has two jobs
// Take in props, name and starsign
// Fetch data from Horoscope API and renders this on the page to the user

function App() {
  const [horoscope, setHoroscope] = React.useState("");

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>ZodiFac</h1>
        <Form />
      </header>
    </div>
  );
}

export default App;
