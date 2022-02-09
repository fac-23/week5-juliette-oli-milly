import React from "react";

function Form() {
  const [name, setName] = React.useState("");
  const [starsign, setStarsign] = React.useState("");
  // Create a form for user to input their data
  // Use the input data to fetch data from Horoscope API
  // Render this data on the page
  // Add event listener to fire when user enters data
  return (
    <form>
      <label htmlFor="name">Name</label>
      <input name="name" type="text" id="name"></input>
      <label htmlFor="starsign">Star Sign</label>
      <input name="starsign" type="text" id="starsign"></input>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
