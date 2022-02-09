import React from "react";

function FetchHoroscope({ name, starsign }) {
  //const [horoscope, setHoroscope] = React.useState(null);
  const [date, setDate] = React.useState(null);
  React.useEffect(() => {
    fetch(`https://ohmanda.com/api/horoscope/aquarius/`)
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  }, [starsign]);

  // React.useEffect(() => {
  //   fetch("https://pokeapi.co/api/v2/pokemon/pikachu/")
  //     .then((res) => res.json())
  //     .then((data) => setDate(data));
  // }, [starsign]);

  return (
    <div>
      Hi {name}, you are a {starsign}. Your horoscope on is horoscope
    </div>
  );
}

export default FetchHoroscope;
