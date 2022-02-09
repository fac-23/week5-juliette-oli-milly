import React from "react";

function FetchGif({ starsign }) {
  const [gif, setGif] = React.useState("");

  React.useEffect(() => {}, [starsign]);

  return <div>hello</div>;
}

export default FetchGif;
