import React from "react";

function FetchHoroscope({ name, starsign }) {
  const [horoscope, setHoroscope] = React.useState(null);
  const [horoVisible, setHoroVisibility] = React.useState(false);

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
          console.log(data);
          setHoroscope(data.description);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [starsign]);

  return (
    <div>
      <button
        onClick={() => {
          setHoroVisibility(!horoVisible);
        }}
      >
        Your future is toggleable
      </button>
      {horoVisible ? (
        <div>
          Hi {name}, you are a {starsign}. Your reading of the stars says:
          {horoscope}
        </div>
      ) : (
        <div>Future Hidden</div>
      )}
    </div>
  );
}

export default FetchHoroscope;
