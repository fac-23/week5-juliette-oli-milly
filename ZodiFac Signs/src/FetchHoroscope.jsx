import React from "react";

function FetchHoroscope({ name, starsign }) {
  const [horoscope, setHoroscope] = React.useState(null);

  React.useEffect(() => {
    if (starsign.length > 0) {
      fetch(
        `https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign=${starsign}&day=today`,
        {
          method: "POST",
          headers: {
            "x-rapidapi-host": "sameer-kumar-aztro-v1.p.rapidapi.com",
            "x-rapidapi-key": import.meta.env.VITE_HOROSCOPE_API_KEY,
          },
        }
      )
        .then((response) => response.json())
        .then((data) => {
          setHoroscope(data.description);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [starsign]);

  return (
    <div>
      Hi {name}, you are a {starsign}. Your reading of the stars says:
      {horoscope}
    </div>
  );
}

export default FetchHoroscope;
