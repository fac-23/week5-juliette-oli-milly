import React from "react";

function FetchGif({ starsign }) {
  const [gif, setGif] = React.useState("");

  React.useEffect(() => {
    if (starsign.length > 0) {
      fetch(
        `https://api.giphy.com/v1/gifs/search?q=${starsign}&api_key=${
          import.meta.env.VITE_GIPHY_API_KEY
        }`
      )
        .then((response) => response.json())
        .then((response) => {
          setGif(response.data[10].images.downsized.url);
        });
    }
  }, [starsign]);

  return <img src={gif}></img>;
}

export default FetchGif;
