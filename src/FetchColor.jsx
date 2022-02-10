import React from "react";

function FetchColor({ starsign }) {
  const [color, setColor] = React.useState("");

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
          setColor(data.color);
        });
    }
  }, [starsign]);

  return <p className={color}>Your color is ...{color}</p>;
}

export default FetchColor;
