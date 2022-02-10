import React from "react";
import FetchHoroscope from "./FetchHoroscope.jsx";
import FetchGif from "./FetchGif.jsx";
import FetchMore from "./FetchMore.jsx";

function Form() {
  const [name, setName] = React.useState("");
  const [starsign, setStarsign] = React.useState("");
  // Create a form for user to input their data
  // Use the input data to fetch data from Horoscope API
  // Render this data on the page
  // Add event listener to fire when user enters data
  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          setName(event.target.name.value);
          setStarsign(event.target.starsign.value);
        }}
      >
        <label htmlFor="name">Name</label>
        <input name="name" type="text" id="name"></input>
        <label htmlFor="starsign">Star Sign</label>
        <input name="starsign" type="text" id="starsign"></input>
        <button type="submit">Submit</button>
      </form>
      <FetchHoroscope name={name} starsign={starsign} />
      <FetchGif name={name} starsign={starsign} />
      <FetchMore starsign={starsign} />
    </div>
  );
}

export default Form;
