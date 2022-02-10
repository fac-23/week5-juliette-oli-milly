import React from "react";

function FetchMore({ colors }) {
  const [info, setInfo] = React.useState("");

  React.useEffect(() => {
    if (colors.length > 0) {
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
        .then((response) => {
          setInfo(data.color);
        });
    }
  }, [colors]);

  return <p>{data.color}</p>;
}

export default FetchMore;
