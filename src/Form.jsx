import React from "react";
function Form({ setFormVisibility, setName, setStarsign, populateStarField }) {
  // Create a form for user to input their data
  // Use the input data to fetch data from Horoscope API
  // Render this data on the page
  // Add event listener to fire when user enters data
  return (
    <div className="flex-column">
      <div></div>
      <form
        className=" form stack-sm width-sm center"
        onSubmit={(event) => {
          event.preventDefault();
          setName(event.target.name.value);
          setStarsign(event.target.starsign.value);
          setFormVisibility(false);
        }}
      >
        <label htmlFor="name">Name</label>
        <input name="name" type="text" id="name"></input>
        <label htmlFor="starsign">Star Sign</label>
        <input
          name="starsign"
          type="text"
          id="starsign"
          value={populateStarField}
        ></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
