import React from "react";

function FetchGif({ starsign }) {
  const [gif, setGif] = React.useState("");
  const [gifVisible, setGifVisibility] = React.useState(false);

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

  return (
    <div>
      <button
        onClick={() => {
          setGifVisibility(!gifVisible);
        }}
      >
        Your star sign art is toggleable
      </button>
      {gifVisible ? <img src={gif}></img> : <div>Future Hidden</div>}
    </div>
  );
}

export default FetchGif;
